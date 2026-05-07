"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Linkedin, Moon, Sun, Mail, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SiteFooter() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Sync with initial theme if needed
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const currentYear = mounted ? new Date().getFullYear() : "2026";

  return (
    <footer className="relative border-t bg-secondary text-secondary-foreground transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-12 lg:grid-cols-5">
          
          {/* Column 1: Brand & Identity */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6 flex flex-col items-start">
              <Image
                src="/vt-logo.png"
                alt="vakiltech"
                width={130}
                height={130}
                className="mb-4"
              />
              <p className="text-sm text-muted-foreground leading-relaxed text-justify max-w-sm">
                <span className="font-bold text-foreground">vakiltech</span> seamlessly connects legal professionals and clients, serving as a dedicated service aggregator to foster effective communication. We are not agents for lawyers; our primary role is to facilitate meaningful connections between lawyers and clients across the country. You can{" "}
                <Link href="/terms-of-use" className="text-primary hover:underline font-medium">
                  Read more here.
                </Link>
              </p>
            </div>
            
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="mb-4 lg:mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80">Services</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/send-legal-notice" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                Send Legal Notice
              </Link>
              <Link href="/consultation" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                Legal Consultation
              </Link>
              <Link href="/document-drafting" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                Document Drafting
              </Link>
              <Link href="/corporate-retainer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                Corporate Retainer
              </Link>

            </nav>
          </div>

          {/* Column 3: Popular Notices (SEO) */}
          <div>
            <h3 className="mb-4 lg:mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80">Legal Notices</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/send-legal-notice/cheque-bounce-legal-notice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cheque Bounce Notice
              </Link>
              <Link href="/send-legal-notice/legal-notice-for-money-recovery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Money Recovery Notice
              </Link>
              <Link href="/send-legal-notice/consumer-complaint-legal-notice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Consumer Complaint
              </Link>
              <Link href="/send-legal-notice/legal-notice-for-unpaid-salary" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Unpaid Salary Notice
              </Link>
              <Link href="/send-legal-notice/eviction-legal-notice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tenant Eviction Notice
              </Link>
              <Link href="/send-legal-notice/legal-notice-for-divorce" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Divorce Legal Notice
              </Link>
              <Link href="/send-legal-notice/property-partition-legal-notice" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Property Dispute
              </Link>
            </nav>
          </div>

          {/* Column 4: Knowledge Hub */}
          <div>
            <h3 className="mb-4 lg:mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80">Knowledge Hub</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group">
                Legal Guides
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Service Pricing
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Support
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Work with Us
              </Link>
            </nav>
            <div className="mt-12">
              <h3 className="mb-4 lg:mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80">Applications</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/will" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Create a Free Will
                </Link>
              </nav>
            </div>
          </div>

          {/* Column 5: Social & Theme */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-4 lg:mb-6 text-sm font-bold uppercase tracking-widest text-foreground/80">Stay Connected</h3>
              <div className="flex gap-4 mb-8">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://facebook.com/vakiltech"
                        target="_blank"
                        className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent><p>Facebook</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://www.instagram.com/vakil.tech/"
                        target="_blank"
                        className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent><p>Instagram</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://www.linkedin.com/company/vakil-tech/"
                        target="_blank"
                        className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent><p>LinkedIn</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a href="mailto:help@vakiltech.in" className="truncate">help@vakiltech.in</a>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-green-500" />
                  </div>
                  <a href="https://wa.me/917047683995" target="_blank" rel="noopener noreferrer" className="truncate">+91-7047683995</a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-muted/20 border border-border flex items-center justify-between shadow-sm">
              <span className="text-xs font-medium text-muted-foreground uppercase">Theme</span>
              <div className="flex items-center space-x-2 scale-90">
                <Sun className="h-4 w-4 text-orange-400" />
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
                <Moon className="h-4 w-4 text-blue-400" />
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer / Bar Council Statement */}
        <div className="mt-16 p-6 rounded-2xl bg-white dark:bg-muted/20 border border-border/50 text-[11px] text-muted-foreground leading-relaxed shadow-sm">
          <p>
            <strong>Disclaimer:</strong> Vakiltech is a platform that connects legal professionals and clients. We are not a law firm and do not provide legal advice. 
            The information provided on this website is for general informational purposes only and should not be construed as legal advice. 
            In accordance with the Bar Council of India rules, we do not solicit work or advertise. By using this website, you acknowledge that you are 
            seeking information on your own accord and that there has been no solicitation or advertisement of any sort.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 text-center md:flex-row md:text-left">
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground/80">
              © {currentYear} Vakiltech Legal Services Pvt Ltd.
            </p>
            <p className="text-[10px] text-muted-foreground tracking-wide uppercase">
              India&apos;s Most Trusted Legal Aggregator
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
