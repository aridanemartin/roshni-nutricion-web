#!/usr/bin/env python3
"""Build the self-contained Colaboraciones prototype gallery.

Inlines the real collaborator logos as base64 data URIs so the result can be
opened directly in a browser without a server.

Usage:
    python3 design/colaboraciones/build.py
"""

import base64
from pathlib import Path

HERE = Path(__file__).parent
REPO = HERE.parent.parent
PUBLIC = REPO / "public" / "static" / "collaborators"

LOGOS = {
    "__LOGO_SER__": "cadenaSerLogo.webp",
    "__LOGO_C7__": "canarias7Logo.webp",
    "__LOGO_PROV__": "laProvinciaLogo.webp",
    "__LOGO_SPAR__": "sparLogo.webp",
}


def data_uri(path: Path) -> str:
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:image/webp;base64,{encoded}"


def main() -> None:
    html = (HERE / "template.html").read_text(encoding="utf-8")
    for token, filename in LOGOS.items():
        html = html.replace(token, data_uri(PUBLIC / filename))
    out = HERE / "prototype.html"
    out.write_text(html, encoding="utf-8")
    print(f"Wrote {out.relative_to(REPO)} ({out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
