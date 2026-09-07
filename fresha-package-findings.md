
## Direct-link feasibility update

The Fresha package catalog renders each package with a client-side View button rather than an anchor href. The saved HTML exposes only page-level links for the package catalog and fallback individual/group booking flows. Clicking a package View button in the public browser opened a Fresha login modal, so a stable package-specific URL was not exposed without account authentication.

The stable verified Fresha destinations are:

- Package catalog: https://www.fresha.com/a/oam-wellness-spa-by-oam-the-therapist-dubai-home-spa-and-massage-at-home-service-tcw8lzjq/packages?menu=true&pId=522208
- Individual appointment booking: https://www.fresha.com/a/oam-wellness-spa-by-oam-the-therapist-dubai-home-spa-and-massage-at-home-service-tcw8lzjq/booking?allOffer=true&menu=true&entryPoint=all_offer_book_individual_appointment&pId=522208
- Group appointment booking: https://www.fresha.com/a/oam-wellness-spa-by-oam-the-therapist-dubai-home-spa-and-massage-at-home-service-tcw8lzjq/booking?allOffer=true&groupBooking=true&menu=true&entryPoint=all_offer_book_group_appointment&pId=522208

Implementation direction: use the package catalog link for package/series cards and the direct individual or group booking link for one-guest versus two-guest offers. This is a direct Fresha route and avoids routing users through WhatsApp without fabricating hidden package-specific URLs.
