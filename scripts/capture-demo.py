"""Captura screenshots e GIF do portfólio sem exibir foto pessoal."""
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
URL = "http://127.0.0.1:5174/"
HIDE_PERSONAL_MEDIA = """
.hero-card { display: none !important; }
#inicio { grid-template-columns: 1fr !important; }
.cursor, .cursor-ring { display: none !important; }
body { cursor: auto !important; }
"""


def prepare_page(page) -> None:
    page.set_viewport_size({"width": 1366, "height": 768})
    page.goto(URL, wait_until="networkidle")
    page.add_style_tag(content=HIDE_PERSONAL_MEDIA)
    page.wait_for_timeout(800)


def capture_screenshots(page) -> None:
    ASSETS.mkdir(exist_ok=True)

    prepare_page(page)
    page.screenshot(path=str(ASSETS / "portfolio-hero.png"))

    for section_id, filename in [
        ("sobre", "portfolio-sobre.png"),
        ("habilidades", "portfolio-habilidades.png"),
        ("projetos", "portfolio-projetos.png"),
        ("contato", "portfolio-contato.png"),
    ]:
        page.locator(f"#{section_id}").scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path=str(ASSETS / filename))

    page.screenshot(path=str(ASSETS / "portfolio-screenshot.png"), full_page=True)


def capture_gif_frames(page) -> list[Path]:
    ASSETS.mkdir(exist_ok=True)
    frames: list[Path] = []

    prepare_page(page)

    scroll_steps = [
        ("frame-00.png", 0),
        ("frame-01.png", 900),
        ("frame-02.png", 1800),
        ("frame-03.png", 2800),
        ("frame-04.png", 3900),
        ("frame-05.png", 5000),
        ("frame-06.png", 6200),
        ("frame-07.png", 4200),
        ("frame-08.png", 2200),
        ("frame-09.png", 0),
    ]

    for filename, scroll_y in scroll_steps:
        page.evaluate(f"window.scrollTo({{ top: {scroll_y}, behavior: 'instant' }})")
        page.wait_for_timeout(450)
        path = ASSETS / filename
        page.screenshot(path=str(path))
        frames.append(path)

    return frames


def build_gif(frames: list[Path]) -> Path:
    images = [Image.open(frame).convert("RGB") for frame in frames]
    gif_path = ASSETS / "portfolio-demo.gif"
    images[0].save(
        gif_path,
        save_all=True,
        append_images=images[1:],
        duration=900,
        loop=0,
    )
    return gif_path


if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        capture_screenshots(page)
        frames = capture_gif_frames(page)
        browser.close()

    gif = build_gif(frames)
    print(f"GIF: {gif}")
    print(f"Screenshot: {ASSETS / 'portfolio-screenshot.png'}")
