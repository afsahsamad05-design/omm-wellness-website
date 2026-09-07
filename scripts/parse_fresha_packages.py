from pathlib import Path
from bs4 import BeautifulSoup
import re

html_path = Path('/home/ubuntu/browser_html/fresha_com_packages_1788785053969.html')
html = html_path.read_text(errors='ignore')
soup = BeautifulSoup(html, 'html.parser')
terms = [
    'Standard Privilege Rejuvenation Package',
    'Advanced Essential Rejuvenation Package',
    'Advanced Privilege Rejuvenation Package',
    'Advanced Essential Therapeutic Massage',
]
for term in terms:
    nodes = soup.find_all(string=lambda s: s and term in s)
    print(f'\nTERM: {term} COUNT: {len(nodes)}')
    for node in nodes[:2]:
        parent = node.parent
        print('PARENT:', parent.name, parent.get('class'))
        for ancestor in list(parent.parents)[:4]:
            text = ' '.join(ancestor.get_text(' ', strip=True).split())
            print('ANCESTOR:', ancestor.name, ancestor.get('class'), text[:260])
            attrs = ' '.join(f'{k}={v}' for k, v in ancestor.attrs.items())
            if 'package' in attrs.lower() or 'offer' in attrs.lower() or 'id' in attrs.lower():
                print('ATTRS:', attrs[:500])
        print('HTML:', str(parent)[:1000])

print('\nURLS')
for a in soup.find_all('a', href=True):
    href = a['href']
    if any(key in href for key in ['package', 'booking', 'offer']):
        print(href)
