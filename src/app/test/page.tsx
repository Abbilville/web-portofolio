import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function TestPage() {
    return (
        <Container className="space-y-12 py-20">
            {/* Theme Toggle di kanan atas */}
            <div className="flex justify-end">
                <ThemeToggle />
            </div>

            <SectionHeading title="UI Components Test" subtitle="Preview semua komponen UI dengan dark mode support" />

            {/* ...existing code... */}

            {/* Buttons */}
            <div className="space-y-4">
                <h3 className="text-h3">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            </div>

            {/* Cards */}
            <div className="space-y-4">
                <h3 className="text-h3">Cards</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <h4 className="text-h4 mb-2">Card Title</h4>
                        <p className="text-muted-foreground">Card content goes here</p>
                    </Card>
                    <Card hover>
                        <h4 className="text-h4 mb-2">Hoverable Card</h4>
                        <p className="text-muted-foreground">Hover me!</p>
                    </Card>
                </div>
            </div>

            {/* Badges */}
            <div className="space-y-4">
                <h3 className="text-h3">Badges</h3>
                <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                </div>
            </div>
        </Container>
    );
}
