import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Search, Plus } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct 24",
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    createdOn: "-",
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    createdOn: "-",
  },
  {
    id: 7,
    title:
      "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    createdOn: "-",
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    createdOn: "-",
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    createdOn: "-",
  },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Articles</h2>
      </div>

      <Tabs defaultValue="generated" className="space-y-6">
        <div className="flex justify-center">
          <TabsList className="gap-2">
            <TabsTrigger value="generated">Generated</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="generated">
          <div className="flex justify-center items-center mt-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for Title & Keywords..."
                className="pl-9 w-74"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Card className="mt-16">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <input type="checkbox" />
                    </TableHead>
                    <TableHead>Article Title</TableHead>
                    <TableHead>Keyword [Traffic]</TableHead>
                    <TableHead>Words</TableHead>
                    <TableHead>Created On</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Publish</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        <input type="checkbox" />
                      </TableCell>
                      <TableCell>{article.title}</TableCell>
                      <TableCell>{article.keyword}</TableCell>
                      <TableCell>{article.words}</TableCell>
                      <TableCell>{article.createdOn}</TableCell>
                      <TableCell>
                        <Button variant="link" className="p-0 h-auto">
                          View
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <Check size={18} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published">No published articles yet.</TabsContent>
        <TabsContent value="scheduled">No scheduled articles.</TabsContent>
        <TabsContent value="archived">
          Archived content will appear here.
        </TabsContent>
      </Tabs>
      <div className="mt-4 px-6 py-4 flex items-center justify-between border-t">
        <div className="flex items-center">
          <span className="mr-2">Show</span>
          <select className="border rounded px-2 py-1">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="ml-2">entries per page</span>
        </div>
        <div>
          <span>1 / 1</span>
        </div>
      </div>
    </div>
  );
}
