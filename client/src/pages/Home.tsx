/* Mediterranean Signal: editorial wellness composition, tactile neutrals, charcoal ink, terracotta conversion cues. */
import { FormEvent, type ReactNode, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const whatsappNumber = "971585228234";
const phoneLabel = "+971 58 522 8234";
const email = "info@oamthetherapist.com";

const whatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const freshaIndividualUrl = "https://www.fresha.com/a/oam-wellness-spa-by-oam-the-therapist-dubai-home-spa-and-massage-at-home-service-tcw8lzjq/booking?allOffer=true&menu=true&entryPoint=all_offer_book_individual_appointment&pId=522208";
const freshaGroupUrl = "https://www.fresha.com/a/oam-wellness-spa-by-oam-the-therapist-dubai-home-spa-and-massage-at-home-service-tcw8lzjq/booking?allOffer=true&groupBooking=true&menu=true&entryPoint=all_offer_book_group_appointment&pId=522208";
const freshaPackagesUrl = "https://www.fresha.com/a/oam-wellness-spa-by-oam-the-therapist-dubai-home-spa-and-massage-at-home-service-tcw8lzjq/packages?menu=true&pId=522208";
const googleReviewsUrl = "https://www.google.com/search?q=Oam+The+Therapist+reviews";

const publicReviewers = [
  { name: "Manee Dannok", note: "Public Google review · Local Guide" },
  { name: "Thanya CW", note: "Public Google review" },
  { name: "abrar alnaqbi", note: "Public Google review" },
  { name: "Oam The Therapist guests", note: "356 public reviews on Google" },
];

const homeSpaBenefits = [
  ["Expert care, wherever you are", "Skilled therapists arrive at your home so you can relax, recover, and receive care without a commute."],
  ["Bespoke and personalised", "Every session is shaped around your needs, preferred pressure, timing, and the space you feel most comfortable in."],
  ["Privacy meets wellbeing", "A private home setting gives you room to slow down, reconnect, and make the appointment entirely yours."],
];

const additionalServices = [
  { title: "Lymphatic Drainage", detail: "A gentle, rhythm-led treatment designed around light touch, relaxation, and a considered sense of ease." },
  { title: "Madero Therapy", detail: "A distinctive wood-tool body treatment delivered with careful technique and a tailored consultation." },
  { title: "Signature Therapy", detail: "A personalised blend of techniques selected around how your body feels on the day." },
  { title: "Pregnancy Care", detail: "A comfort-first treatment conversation for expecting clients, with positioning and pressure discussed before the session." },
  { title: "Other Services", detail: "Have something specific in mind? Tell us what you need and the team will guide you to the right option." },
];

type ServiceFilter = "all" | "massage" | "spa" | "training";

const treatments = [
  {
    number: "01",
    title: "Deep Tissue",
    category: "massage" as const,
    detail:
      "Slow, sustained pressure for deeper muscular tension, recovery, and the places that need more focused attention.",
    image: "/manus-storage/omm-deep-tissue_caf6d826.jpg",
  },
  {
    number: "02",
    title: "Reflexology",
    category: "spa" as const,
    detail:
      "A focused foot treatment tailored to your needs, designed to leave the whole body feeling lighter and renewed.",
    image: "/manus-storage/omm-reflexology_b5ac1d1b.jpg",
  },
  {
    number: "03",
    title: "Hot Stone",
    category: "spa" as const,
    detail:
      "Warm stones and flowing massage work together to soften tension and settle the nervous system.",
    image: "/manus-storage/omm-hot-stone_6d8a6ce8.jpg",
  },
  {
    number: "04",
    title: "Swedish",
    category: "massage" as const,
    detail:
      "Classical strokes, kneading, gliding, and rhythmic movement for an unhurried reset.",
    image: "/manus-storage/omm-swedish-corrected_c7727f6a.jpg",
  },
  {
    number: "05",
    title: "Trigger Point",
    category: "massage" as const,
    detail:
      "Precise attention to constricted muscle areas that can refer discomfort elsewhere in the body.",
    image: "/manus-storage/omm-trigger-point_541540e4.jpg",
  },
  {
    number: "06",
    title: "Warrior Massage",
    category: "massage" as const,
    detail:
      "A distinctive Thai and yoga-inspired combination of rhythmic oil massage, gentle stretching, and mindful movement.",
    image: "/manus-storage/omm-warrior_3560c0eb.jpg",
  },
];

const pricingPackages = [
  {
    number: "01",
    name: "Essential Reset",
    eyebrow: "60 minutes · one guest",
    detail: "A focused treatment for the body that needs a considered pause today.",
    includes: ["Choose any core massage", "Therapist-led consultation", "Home setup and reset"],
    price: "Live 60-minute options on Fresha",
    cta: "Book on Fresha",
    bookingUrl: freshaIndividualUrl,
    featured: false,
  },
  {
    number: "02",
    name: "Deep Restore",
    eyebrow: "90 minutes · one guest",
    detail: "More time to release, recalibrate, and let the session unfold without rushing.",
    includes: ["Extended full-body session", "Treatment tailored to your needs", "Home setup and reset"],
    price: "Live 90-minute options on Fresha",
    cta: "Book on Fresha",
    bookingUrl: freshaIndividualUrl,
    featured: true,
  },
  {
    number: "03",
    name: "Ritual for Two",
    eyebrow: "2 × 60 minutes · one visit",
    detail: "A shared home spa moment for couples, friends, or anyone worth slowing down with.",
    includes: ["Two individual treatments", "Coordinated home arrival", "A shared, private setting"],
    price: "Live group booking on Fresha",
    cta: "Book a group visit",
    bookingUrl: freshaGroupUrl,
    featured: false,
  },
  {
    number: "04",
    name: "Monthly Balance",
    eyebrow: "3 × 60 minutes · series",
    detail: "A simple rhythm for making wellbeing part of the month, not a once-in-a-while idea.",
    includes: ["Three home sessions", "Flexible treatment choice", "Series scheduling support"],
    price: "Live package deals on Fresha",
    cta: "View packages on Fresha",
    bookingUrl: freshaPackagesUrl,
    featured: false,
  },
];

const processSteps = [
  ["01", "Tell us what you need", "Share your preferred treatment, timing, and location on WhatsApp."],
  ["02", "We prepare the ritual", "Your therapist arrives with the equipment and details needed for your session."],
  ["03", "Make space to exhale", "Settle in at home while your space becomes a private sanctuary for wellbeing."],
];

function BrandMark({ size = "normal" }: { size?: "normal" | "small" }) {
  return (
    <span className={`brand-glyph brand-glyph--${size}`} aria-hidden="true">
      <img src="/manus-storage/oam-original-logo_0b93830f.webp" alt="" />
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="section-label">
      <span className="section-label__line" />
      {children}
    </p>
  );
}

function ButtonLink({
  href,
  children,
  variant = "dark",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "terracotta" | "quiet";
  external?: boolean;
}) {
  return (
    <a
      className={`button button--${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
      <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}

function BookingForm() {
  const [name, setName] = useState("");
  const [treatment, setTreatment] = useState("Deep Tissue Massage");

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const greeting = name.trim() ? `Hello, my name is ${name.trim()}.` : "Hello, I would like to book a session.";
    window.open(
      whatsappUrl(`${greeting} I am interested in ${treatment}. Please share availability and details.`),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="booking-form" onSubmit={submitBooking}>
      <div className="booking-form__head">
        <span>Quick booking</span>
        <MessageCircle size={18} />
      </div>
      <label>
        Your name
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="How should we address you?" />
      </label>
      <label>
        I am looking for
        <select value={treatment} onChange={(event) => setTreatment(event.target.value)}>
          <option>Deep Tissue Massage</option>
          <option>Swedish Massage</option>
          <option>Hot Stone Massage</option>
          <option>Reflexology</option>
          <option>Trigger Point Therapy</option>
          <option>Warrior Massage</option>
          <option>Not sure yet — advise me</option>
        </select>
      </label>
      <button className="button button--terracotta button--full" type="submit">
        Continue on WhatsApp <MoveRight size={16} />
      </button>
      <p className="booking-form__note">Available daily, 10 AM–12 AM · Dubai, Sharjah & Abu Dhabi</p>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ServiceFilter>("all");

  const closeMenu = () => setMenuOpen(false);
  const visibleTreatments = activeFilter === "all" || activeFilter === "training"
    ? treatments
    : treatments.filter((treatment) => treatment.category === activeFilter);

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span>Home spa, thoughtfully brought to you</span>
        <span className="announcement-bar__divider" />
        <span>Dubai · Sharjah · Abu Dhabi</span>
        <a href={whatsappUrl("Hello, I would like to enquire about an OMM Wellness home spa booking.")} target="_blank" rel="noreferrer">
          Book your ritual <ArrowUpRight size={13} />
        </a>
      </div>

      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="Oam The Therapist home">
          <BrandMark />
          <span>
            <strong>Oam The Therapist</strong>
            <small>Balance | Life | Freedom</small>
          </span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          <div className="nav-preview">
            <a className="nav-preview__trigger" href="#treatments" onClick={closeMenu}>Treatments <ChevronDown size={12} /></a>
            <div className="nav-preview__panel">
              <span>Home SPA Services</span>
              <a href="#treatments" onClick={closeMenu}>Massages</a>
              <a href="#extended-services" onClick={closeMenu}>Lymphatic Drainage</a>
              <a href="#extended-services" onClick={closeMenu}>Madero Therapy</a>
              <a href="#extended-services" onClick={closeMenu}>Signature Therapy</a>
            </div>
          </div>
          <div className="nav-preview">
            <a className="nav-preview__trigger" href="#pricing" onClick={closeMenu}>Packages <ChevronDown size={12} /></a>
            <div className="nav-preview__panel">
              <span>Choose your rhythm</span>
              <a href="#pricing" onClick={closeMenu}>Essential Reset</a>
              <a href="#pricing" onClick={closeMenu}>Deep Restore</a>
              <a href="#pricing" onClick={closeMenu}>Ritual for Two</a>
              <a href="#pricing" onClick={closeMenu}>Monthly Balance</a>
            </div>
          </div>
          <div className="nav-preview">
            <a className="nav-preview__trigger" href="#ritual" onClick={closeMenu}>The OMM way <ChevronDown size={12} /></a>
            <div className="nav-preview__panel nav-preview__panel--wide">
              <span>Balance | Life | Freedom</span>
              <p>Private home wellness, thoughtful care, and a treatment shaped around your moment.</p>
              <a href="#ritual" onClick={closeMenu}>Read our approach <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="nav-preview">
            <a className="nav-preview__trigger" href="#reviews" onClick={closeMenu}>Reviews <ChevronDown size={12} /></a>
            <div className="nav-preview__panel nav-preview__panel--wide">
              <span>What our clients think</span>
              <p>See the public Google rating, reviewer profiles, and the original review source.</p>
              <a href="#reviews" onClick={closeMenu}>View reviews <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="nav-preview">
            <a className="nav-preview__trigger" href="#training" onClick={closeMenu}>Training <ChevronDown size={12} /></a>
            <div className="nav-preview__panel nav-preview__panel--wide">
              <span>Learn the craft</span>
              <p>Technique-led training for candidates building a meaningful wellness career.</p>
              <a href="#training" onClick={closeMenu}>Request the syllabus <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="nav-preview nav-preview--simple"><a className="nav-preview__trigger" href="#careers" onClick={closeMenu}>Careers</a></div>
          <div className="nav-preview nav-preview--simple"><a className="nav-preview__trigger" href="#contact" onClick={closeMenu}>Contact</a></div>
          <ButtonLink href={whatsappUrl("Hello, I would like to book an OMM Wellness home spa session.")} variant="dark" external>Book on WhatsApp</ButtonLink>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <SectionLabel>Modern home wellness · UAE</SectionLabel>
            <h1>Wellness,<br /><em>made personal.</em></h1>
            <p className="hero-lede">Therapist-led massage, recovery, and spa rituals brought to your door with precision, warmth, and a clearer way to feel better.</p>
            <div className="hero-actions">
              <ButtonLink href={whatsappUrl("Hello, I would like to book a private OMM Wellness home spa session.")} variant="terracotta" external>Book your session</ButtonLink>
              <a className="text-link" href="#treatments">Explore treatments <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-signature">
              <span>Balance</span><i /> <span>Life</span><i /> <span>Freedom</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="/manus-storage/omm-hero_3526a111.jpg" alt="A calm home spa treatment setup with warm towels and massage stones" />
              <div className="hero-stamp"><Sparkles size={15} /><span>Make space<br />for yourself.</span></div>
            </div>
            <div className="hero-note"><span>01</span><p>We bring the equipment.<br />You bring the right mood.</p></div>
          </div>
        </section>

        <section className="proof-strip" aria-label="OMM Wellness service highlights">
          <div><Clock3 size={17} /><span>10 AM — 12 AM, every day</span></div>
          <div><Sparkles size={17} /><span>Tailored therapist-led care</span></div>
          <div><ArrowUpRight size={17} /><span>Dubai · Sharjah · Abu Dhabi</span></div>
        </section>

        <section className="intro-section" id="ritual">
          <div className="intro-aside"><span>02</span><span className="vertical-rule" /><span>THE OMM WAY</span></div>
          <div className="intro-copy">
            <SectionLabel>A better kind of appointment</SectionLabel>
            <h2>Care that moves with <em>your life.</em></h2>
            <p>OMM Wellness brings a serene, considered spa experience into the place where you are most comfortable: home. Whether you are easing a demanding week, reconnecting with someone you love, or simply taking care of yourself, every session is shaped around your body and your moment.</p>
            <p>Our role is to guide the body back towards its own sense of balance with expert technique, a calm presence, and a treatment that feels personal from the first message to the final breath.</p>
            <a className="text-link text-link--terracotta" href={whatsappUrl("Hello, I would like help choosing the right OMM Wellness treatment for me.")} target="_blank" rel="noreferrer">Help me choose <MoveRight size={16} /></a>
          </div>
          <div className="intro-image-card">
            <img src="/manus-storage/omm-treatment_b59f9fd7.jpg" alt="Massage treatment in a softly lit spa setting" />
            <span>Healing begins within.</span>
          </div>
        </section>

        <section className="home-services-section" id="home-services" aria-labelledby="home-services-title">
          <div className="home-services-copy">
            <SectionLabel>Home SPA Services</SectionLabel>
            <h2 id="home-services-title">A private spa, <em>wherever you are.</em></h2>
            <p>Oam The Therapist brings personalised massage treatments to the comfort of your home, so you can relax, recover, and reconnect without the stress of travelling to a spa.</p>
            <p>From a single restorative session to a thoughtful treatment plan, our therapists create a safe, serene atmosphere around your needs and your time.</p>
            <a className="text-link text-link--terracotta" href="#treatments">Explore massage services <MoveRight size={16} /></a>
          </div>
          <div className="home-services-benefits">
            <p className="benefits-kicker">Benefits of massage at home</p>
            {homeSpaBenefits.map(([title, detail], index) => (
              <article className="benefit-row" key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-section" id="reviews" aria-labelledby="reviews-title">
          <div className="reviews-intro">
            <SectionLabel>Google Reviews</SectionLabel>
            <h2 id="reviews-title">What our clients <em>think about us.</em></h2>
            <p>If you have visited Oam The Therapist, we would love to hear about your experience. Read the original reviews or leave your own directly on Google.</p>
            <a className="google-review-button" href={googleReviewsUrl} target="_blank" rel="noreferrer"><span className="google-g">G</span><span>Leave a review on Google</span><ArrowUpRight size={15} /></a>
          </div>
          <div className="reviews-score">
            <span className="google-wordmark">Google Reviews</span>
            <div className="reviews-score__number">5.0</div>
            <div className="reviews-score__stars" aria-label="5 out of 5 on Google">★★★★★</div>
            <p><strong>356 public reviews</strong><br />Verified on the public Google Business profile</p>
          </div>
          <div className="review-wall" aria-label="Public Google review profiles">
            {publicReviewers.map((reviewer) => (
              <article className="review-card" key={reviewer.name}>
                <div className="review-card__avatar" aria-hidden="true">{reviewer.name.charAt(0).toUpperCase()}</div>
                <div className="review-card__body">
                  <div className="review-card__head"><strong>{reviewer.name}</strong><span>★★★★★</span></div>
                  <small>{reviewer.note}</small>
                  <p>Read the original customer review on Google.</p>
                  <a href={googleReviewsUrl} target="_blank" rel="noreferrer">Open on Google <ArrowUpRight size={13} /></a>
                </div>
              </article>
            ))}
          </div>
          <p className="reviews-source">Reviewer names, rating, and review count are presented from the public Google Business profile for Oam the Therapist FZE. Full review text remains on Google so every customer statement stays original and verifiable. <a href={googleReviewsUrl} target="_blank" rel="noreferrer">View more ↗</a></p>
        </section>

        <section className="treatments-section" id="treatments">
          <div className="section-heading-row">
            <div>
              <SectionLabel>Find your mode</SectionLabel>
              <h2>Treatments with <em>clear intent.</em></h2>
            </div>
            <p>From deep release to quiet restoration, choose a treatment that meets you where you are. Not sure? Message us and we will help you find your fit.</p>
          </div>
          <div className="service-filter" role="tablist" aria-label="Explore OMM Wellness categories">
            {([
              ["all", "All services"],
              ["massage", "Massages"],
              ["spa", "Spa treatments"],
              ["training", "Training courses"],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                className={`service-filter__button ${activeFilter === value ? "is-active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeFilter === value}
                onClick={() => setActiveFilter(value)}
              >
                {label}<ArrowUpRight size={14} />
              </button>
            ))}
          </div>
          <div className={`service-results ${activeFilter === "training" ? "service-results--training" : ""}`} aria-live="polite">
            {activeFilter === "training" ? (
              <article className="training-filter-card">
                <div className="training-filter-card__index">03</div>
                <div>
                  <SectionLabel>Learn with OMM</SectionLabel>
                  <h3>Therapist training <em>with intention.</em></h3>
                  <p>A practical pathway for candidates who want to build skill, presence, and a meaningful career in therapeutic wellness.</p>
                </div>
                <a className="button button--dark" href="#training">Explore the course <ArrowUpRight size={15} /></a>
              </article>
            ) : (
              <div className="treatment-list">
                {visibleTreatments.map((treatment) => (
                  <article className="treatment-card" key={treatment.title}>
                    <div className="treatment-card__image"><img src={treatment.image} alt={`${treatment.title} treatment atmosphere`} /></div>
                    <div className="treatment-card__content">
                      <div className="treatment-card__meta"><span>{treatment.number}</span><ArrowUpRight size={17} /></div>
                      <h3>{treatment.title}</h3>
                      <p>{treatment.detail}</p>
                      <a href={whatsappUrl(`Hello, I would like to enquire about ${treatment.title}. Please share the details.`)} target="_blank" rel="noreferrer">Enquire about this treatment <MoveRight size={15} /></a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="extended-services-section" id="extended-services" aria-labelledby="extended-services-title">
          <div className="extended-services-heading">
            <SectionLabel>More ways to feel looked after</SectionLabel>
            <h2 id="extended-services-title">Services beyond <em>the classic massage.</em></h2>
            <p>Explore additional care options and tell us what your body, schedule, or occasion calls for. We will help you find the right starting point.</p>
          </div>
          <div className="extended-services-list">
            {additionalServices.map((service, index) => (
              <article className="extended-service-row" key={service.title}>
                <span>0{index + 1}</span>
                <div><h3>{service.title}</h3><p>{service.detail}</p></div>
                <a href={whatsappUrl(`Hello, I would like to enquire about ${service.title}. Please share the details.`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${service.title}`}><ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-heading-row pricing-heading-row">
            <div>
              <SectionLabel>Make it a ritual</SectionLabel>
              <h2>Packages that make <em>booking easier.</em></h2>
            </div>
            <p>Start with one session or make space for a rhythm. Use the matching Fresha route below to see live prices, service options, and availability.</p>
          </div>
          <div className="pricing-grid">
            {pricingPackages.map((pack) => (
              <article className={`pricing-card ${pack.featured ? "pricing-card--featured" : ""}`} key={pack.name}>
                <div className="pricing-card__top"><span>{pack.number}</span>{pack.featured && <span className="pricing-card__tag">Most requested format</span>}</div>
                <p className="pricing-card__eyebrow">{pack.eyebrow}</p>
                <h3>{pack.name}</h3>
                <p className="pricing-card__detail">{pack.detail}</p>
                <div className="pricing-card__includes">
                  {pack.includes.map((item) => <span key={item}><Check size={14} />{item}</span>)}
                </div>
                <div className="pricing-card__bottom"><strong>{pack.price}</strong><a href={pack.bookingUrl} target="_blank" rel="noreferrer">{pack.cta} <ArrowUpRight size={15} /></a></div>
              </article>
            ))}
          </div>
          <div className="pricing-note"><Sparkles size={16} /><span>Fresha shows the current service prices and availability. Choose an individual, group, or package route above and complete the booking there.</span><a href={freshaPackagesUrl} target="_blank" rel="noreferrer">Open the Fresha menu <MoveRight size={15} /></a></div>
        </section>

        <section className="booking-rail">
          <div className="booking-rail__copy">
            <SectionLabel>A moment, made easy</SectionLabel>
            <h2>Choose the treatment.<br /><em>We bring the ritual.</em></h2>
            <p>No commute, no crowded waiting room, no need to rearrange your whole day. We arrive at your home with what is needed to make the space feel calm, considered, and entirely yours.</p>
            <div className="booking-rail__contact"><Phone size={16} /><a href={`tel:${phoneLabel.replace(/\s/g, "")}`}>{phoneLabel}</a><span>or</span><a href={whatsappUrl("Hello, I would like to ask a question about OMM Wellness.")} target="_blank" rel="noreferrer">WhatsApp us</a></div>
          </div>
          <BookingForm />
        </section>

        <section className="process-section">
          <div className="process-heading"><SectionLabel>Simple by design</SectionLabel><h2>Your next hour<br /><em>starts here.</em></h2></div>
          <div className="process-list">
            {processSteps.map(([number, title, detail]) => (
              <div className="process-step" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="training-section" id="training">
          <div className="training-image"><img src="/manus-storage/omm-treatment_b59f9fd7.jpg" alt="Therapist training workshop with hands-on learning" /><span className="image-caption">OMM Training Studio · Learn with intention</span></div>
          <div className="training-copy">
            <SectionLabel>For the next generation of therapists</SectionLabel>
            <h2>Learn the craft.<br /><em>Carry it forward.</em></h2>
            <p>OMM Wellness is opening a training pathway for people who want to learn therapeutic touch with patience, precision, and respect for the person on the table.</p>
            <div className="training-points">
              <div><Check size={15} /><span>Technique-led learning with practical guidance</span></div>
              <div><Check size={15} /><span>A calm, professional approach to client care</span></div>
              <div><Check size={15} /><span>A foundation for a meaningful wellness career</span></div>
            </div>
            <a className="button button--dark" href={`mailto:${email}?subject=OMM%20Wellness%20Training%20Enquiry&body=Hello%20OMM%20Wellness,%0D%0A%0D%0AI%20am%20interested%20in%20the%20therapist%20training%20pathway.%20Please%20share%20the%20syllabus,%20dates,%20and%20next%20steps.%0D%0A%0D%0AName:%0D%0APhone:%0D%0A`}>Request the syllabus <ArrowUpRight size={15} /></a>
            <p className="microcopy">We will reply with the current syllabus, schedule, and enrolment details.</p>
          </div>
        </section>

        <section className="careers-section" id="careers">
          <div className="careers-copy">
            <SectionLabel>Come work with us</SectionLabel>
            <h2>Good care begins with <em>good people.</em></h2>
            <p>We are building a thoughtful network of therapists and wellness coordinators who care about technique, boundaries, reliability, and the small details that make someone feel safe.</p>
            <div className="role-list"><span>Massage therapists</span><span>Wellness trainees</span><span>Client coordinators</span></div>
            <a className="text-link text-link--terracotta" href={`mailto:${email}?subject=OMM%20Wellness%20Career%20Enquiry&body=Hello%20OMM%20Wellness,%0D%0A%0D%0AI%20would%20like%20to%20explore%20a%20career%20opportunity%20with%20your%20team.%0D%0A%0D%0AName:%0D%0ARole%20of%20interest:%0D%0APhone:%0D%0A`}>Send your interest <ArrowUpRight size={16} /></a>
          </div>
          <div className="careers-image"><img src="/manus-storage/omm-careers_5e2a6e57.jpg" alt="A wellness therapist standing beside a calm treatment space" /><div className="careers-image__note"><span>03</span><p>Bring your hands,<br />your heart, your standards.</p></div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-main"><SectionLabel>Begin your experience</SectionLabel><h2>Make room for <em>wellbeing.</em></h2><p>Tell us what you need and where you are. We will take it from there.</p><ButtonLink href={whatsappUrl("Hello, I would like to begin my OMM Wellness home spa experience.")} variant="terracotta" external>Message OMM on WhatsApp</ButtonLink></div>
          <div className="contact-details"><div><span>Call or WhatsApp</span><a href={`tel:${phoneLabel.replace(/\s/g, "")}`}>{phoneLabel}</a></div><div><span>Email</span><a href={`mailto:${email}`}>{email}</a></div><div><span>Service area</span><p>Dubai · Sharjah · Abu Dhabi<br />Home service · 10 AM–12 AM daily</p></div><div className="contact-details__social"><a href="https://www.instagram.com/oam.wellness/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://wa.me/971585228234" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><a href="#top" className="footer-brand"><BrandMark size="small" /><span>Oam The Therapist</span></a><span>Balance | Life | Freedom</span><span>© {new Date().getFullYear()} Oam The Therapist. Home SPA and massage at home service in the UAE.</span></footer>

      <a className="floating-whatsapp" href={whatsappUrl("Hello, I would like to book an OMM Wellness session.")} target="_blank" rel="noreferrer" aria-label="Book on WhatsApp"><MessageCircle size={19} /><span>Book on WhatsApp</span></a>
    </div>
  );
}
