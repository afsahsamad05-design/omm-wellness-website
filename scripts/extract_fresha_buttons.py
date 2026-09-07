from pathlib import Path
from bs4 import BeautifulSoup

html = Path('/home/ubuntu/browser_html/fresha_com_packages_1788785053969.html').read_text(errors='ignore')
soup = BeautifulSoup(html, 'html.parser')
terms = [
    'Standard Privilege Rejuvenation Package',
    'Advanced Essential Rejuvenation Package',
    'Advanced Privilege Rejuvenation Package',
    'Advanced Essential Therapeutic Massage',
]
for term in terms:
    node = soup.find(string=lambda s: s and term in s)
    print(f'\n### {term}')
    if not node:
        print('NOT FOUND')
        continue
    card = node.find_parent(class_=lambda c: c and 'PackageCard-module' in ' '.join(c) if isinstance(c, list) else False)
    if not card:
        card = node.parent
        for ancestor in node.parent.parents:
            classes = ' '.join(ancestor.get('class', []))
            if 'PackageCard-module' in classes and classes.endswith('card'):
                card = ancestor
                break
    print('CARD CLASS:', card.get('class'))
    for el in card.find_all(['button','a']):
        print('ACTION:', el.name, 'text=', ' '.join(el.get_text(' ', strip=True).split()), 'attrs=', dict(el.attrs))
