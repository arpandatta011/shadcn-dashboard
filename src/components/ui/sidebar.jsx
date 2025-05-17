import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Newspaper,
  Link as LinkIcon,
  Link2,
  Box,
  CreditCard,
  Award,
  HelpCircle,
  Bell,
  MessageCircle,
  User,
} from "lucide-react";

export function Sidebar({ className }) {
  const [isArticlesOpen, setIsArticlesOpen] = useState(true);

  return (
    <div
      className={cn("w-74 bg-white border-r h-full overflow-y-auto", className)}
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold">Abun</h1>
      </div>

      <nav className="space-y-1">
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => setIsArticlesOpen(!isArticlesOpen)}
          >
            <FileText className="mr-3 h-4 w-4" />
            <span>Articles</span>
            <svg
              className={cn(
                "ml-auto h-5 w-5 transform transition-transform",
                isArticlesOpen ? "rotate-180" : ""
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>

          {isArticlesOpen && (
            <div className="pl-10 space-y-1">
              <SidebarLink to="/create-article" text="Create Article" />
              <SidebarLink to="/generated-articles" text="Generated Articles" />
              <SidebarLink to="/keyword-projects" text="Keyword Projects" />
              <SidebarLink to="/ai-keyword" text="AI Keyword to Article" />
              <SidebarLink
                to="/steal-keyword"
                text="Steal Competitor Keyword"
              />
              <SidebarLink to="/import-gsc" text="Import Keyword from GSC" />
              <SidebarLink
                to="/manual-keyword"
                text="Manual Keyword to Article"
              />
              <SidebarLink to="/bulk-keyword" text="Bulk Keyword to Article" />
              <SidebarLink
                to="/longtail-keyword"
                text="Longtail Keyword to Article"
              />
              <SidebarLink to="/article-settings" text="Article Settings" />
            </div>
          )}
        </div>
        <SidebarLink
          to="/auto-blog"
          icon={<Newspaper className="h-4 w-4" />}
          text="Auto Blog"
        />
        <SidebarLink
          to="/internal-links"
          icon={<LinkIcon className="h-4 w-4" />}
          text="Internal Links"
        />
        <SidebarLink
          to="/free-backlinks"
          icon={<Link2 className="h-4 w-4" />}
          text="Free Backlinks"
        />
        <SidebarLink
          to="/integrations"
          icon={<Box className="h-4 w-4" />}
          text="Integrations"
        />
        <SidebarLink
          to="/subscription"
          icon={<CreditCard className="h-4 w-4" />}
          text="Subscription"
        />
        <SidebarLink
          to="/affiliate"
          icon={<Award className="h-4 w-4" />}
          text="Affiliate Program"
        />
        <SidebarLink
          to="/help"
          icon={<HelpCircle className="h-4 w-4" />}
          text="Help Center"
        />
        <SidebarLink
          to="/updates"
          icon={<Bell className="h-4 w-4" />}
          text="Updates"
        />
        <SidebarLink
          to="/chat"
          icon={<MessageCircle className="h-4 w-4" />}
          text="Live Chat Support"
        />
        <SidebarLink
          to="/profile"
          icon={<User className="h-4 w-4" />}
          text="Profile"
        />
      </nav>
    </div>
  );
}

function SidebarLink({ to, icon, text }) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      )}
    >
      <span className="mr-3">{icon}</span>
      {text}
    </Link>
  );
}
