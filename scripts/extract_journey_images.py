from bs4 import BeautifulSoup
from urllib.parse import urljoin

html_path = '/home/ubuntu/browser_html/oamthetherapist_com_oam-the-therapist_1788949015556.html'
html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')
seen = set()
for img in soup.find_all('img'):
    src = img.get('src') or img.get('data-src') or ''
    if 'static.wixstatic.com/media/' in src and src not in seen:
        seen.add(src)
        alt = ' '.join((img.get('alt') or '').split())
        print(f'ALT: {alt}\nSRC: {src}\n')
