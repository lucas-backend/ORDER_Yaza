import re
import os

os.makedirs('components', exist_ok=True)

with open('../example/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove HTML comments
html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)

# 2. Convert class= to className=
html = html.replace('class=', 'className=')

# 3. Convert specific inline style in UI/UX section to valid React style object
style_pattern = r'style="\s*background-image:\s*radial-gradient\(#fff\s+1px,\s*transparent\s+1px\);\s*background-size:\s*20px\s+20px;\s*"'
html = re.sub(style_pattern, 'style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}', html)

# 4. Remove dark mode classes (any class starting with dark:)
html = re.sub(r'\s*dark:[a-zA-Z0-9_/-]+', '', html)

# 5. Fix <br> just in case
html = html.replace('<br>', '<br />')

# Extract components
components = {
    'Navbar': r'<nav\s+className="fixed.*?<\/nav>',
    'HeroSection': r'<header\s+id="hero".*?<\/header>',
    'AboutSection': r'<section\s+id="about".*?<\/section>',
    'LogosSection': r'<section\s+id="logos".*?<\/section>',
    'VisualIdentitySection': r'<section\s+id="visual-identity".*?<\/section>',
    'UiUxSection': r'<section\s+id="uiux".*?<\/section>',
    'SocialMediaSection': r'<section\s+id="social-media".*?<\/section>',
    'Footer': r'<footer\s+id="footer".*?<\/footer>'
}

def write_comp(name, content):
    content = content.strip()
    code = f"export default function {name}() {{\n  return (\n    {content}\n  );\n}}\n"
    with open(f'components/{name}.jsx', 'w', encoding='utf-8') as f:
        f.write(code)

for name, pattern in components.items():
    match = re.search(pattern, html, flags=re.DOTALL)
    if match:
        write_comp(name, match.group(0))
        print(f"Created {name}.jsx")
    else:
        print(f"Component not found: {name}")

# Marquee extraction
marquee_full_pattern = r'<div\s+className="w-full bg-\[#0a0a2a\] text-primary py-4 overflow-hidden.*?<\/div>\s*<\/div>'
match = re.search(marquee_full_pattern, html, flags=re.DOTALL)
if match:
    write_comp('Marquee', match.group(0))
    print("Created Marquee.jsx")
else:
    print("Marquee not found")

print("Conversion complete.")
