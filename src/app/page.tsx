"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import MetricCardSix from '@/components/sections/metrics/MetricCardSix';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Coffee, Heart, Sparkles, Star, Users, Calendar, Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function BrewHavenPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Brew Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898511537-fofgqa0q.jpg"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
            { name: "Blog", id: "blog" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Discover Your Perfect Brew"
          description="Artisan coffee crafted with passion and precision. Every cup tells a story of quality, care, and exceptional taste."
          tags={["Specialty Roasts", "Ethically Sourced", "Fresh Daily", "Expert Baristas"]}
          buttons={[
            { text: "Explore Our Menu", href: "menu" },
            { text: "Learn Our Story", href: "about" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765979171223-t6w42a4v.jpg"
          showcaseImageAlt="Barista creating latte art"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765979171223-t6w42a4v.jpg"
          imageAlt="Coffee shop ambiance"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Heritage"
          tagIcon={Coffee}
          title="Where Passion Meets Perfect Coffee"
          description="Founded in 2015, Brew Haven has been serving the community with carefully sourced, expertly roasted coffee beans."
          subdescription="Brewing Excellence Since 2015"
          icon={Heart}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898514181-7o7vcvxp.jpg"
          imageAlt="Coffee roasting process"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFive
          title="Our Menu"
          description="Handcrafted beverages and fresh pastries to complement your perfect cup"
          tag="Specialty Selection"
          tagIcon={Sparkles}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "espresso",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898515906-ph6483sb.jpg",
              imageAlt: "Espresso shot",
              button: { text: "View Details" },
              isFavorited: false
            },
            {
              id: "cappuccino",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898517070-nufk0zqu.jpg",
              imageAlt: "Cappuccino",
              button: { text: "View Details" },
              isFavorited: false
            },
            {
              id: "pastry",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898518387-c4hqw4j1.jpg",
              imageAlt: "Fresh pastry",
              button: { text: "View Details" },
              isFavorited: false
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="Join thousands of coffee lovers who trust Brew Haven for their daily ritual"
          cardTag="Loved by our community"
          cardTagIcon={Star}
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898525192-gcnhw3x9.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898526184-q0gj4hwm.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Davis",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898527408-3167jt25.jpg",
              imageAlt: "Emma Davis"
            },
            {
              id: "4",
              name: "James Wilson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898529331-h4ksu2oi.jpg",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          title="Meet Our Team"
          description="Passionate coffee professionals dedicated to your perfect cup"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          tag="Our Experts"
          tagIcon={Users}
          animationType="slide-up"
          team={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Head Barista",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898519397-hc9b008o.jpg",
              imageAlt: "Marco Rossi"
            },
            {
              id: "2",
              name: "Lisa Chen",
              role: "Coffee Roaster",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898520653-3gg4r1uz.jpg",
              imageAlt: "Lisa Chen"
            },
            {
              id: "3",
              name: "David Martinez",
              role: "Barista",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898522155-xbacqt36.jpg",
              imageAlt: "David Martinez"
            },
            {
              id: "4",
              name: "Sophie Laurent",
              role: "Owner & Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898523944-oepiaxbg.jpg",
              imageAlt: "Sophie Laurent"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSix
          title="By The Numbers"
          description="Our commitment to excellence reflected in these milestones"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="four-items-2x2-equal-grid"
          metrics={[
            {
              id: "1",
              value: "50K+",
              tag: "Customers",
              tagIcon: Users,
              title: "Coffee Lovers Served"
            },
            {
              id: "2",
              value: "10",
              tag: "Years",
              tagIcon: Calendar,
              title: "Of Excellence"
            },
            {
              id: "3",
              value: "25+",
              tag: "Roasts",
              tagIcon: Coffee,
              title: "Specialty Blends"
            },
            {
              id: "4",
              value: "100%",
              tag: "Ethical",
              tagIcon: Leaf,
              title: "Ethically Sourced"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Premium Partners"
          description="We collaborate with the finest suppliers and brands in the coffee industry"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898534600-xb5l1298.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898536395-agtw0afn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898537555-b4hgkzel.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898539039-gwf5fzeu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898540266-qrvnu55v.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898542067-vao1i27p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898543711-te35kq5f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898545425-ea70anfi.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Brewed In"
          description="Subscribe to our newsletter for weekly coffee tips, exclusive offers, and new blend announcements."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765898533316-aje3tr7y.jpg"
          imageAlt="Cozy coffee shop"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Brew Haven"
          title="Crafting exceptional coffee experiences for our community since 2015"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#about" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "#menu" },
                { label: "Pastries", href: "#menu" },
                { label: "Specials", href: "#menu" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms", href: "#" },
                { label: "Privacy", href: "#" },
                { label: "Cookies", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Phone, text: "(555) 123-4567" },
            { icon: Mail, text: "hello@brewhaven.com" },
            { icon: MapPin, text: "123 Coffee Street, Brew City, BC 12345" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
