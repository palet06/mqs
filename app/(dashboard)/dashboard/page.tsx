import { AppSidebar } from "@/components/dashboardcomponents/app-sidebar";
import { NavActions } from "@/components/dashboardcomponents/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  
  Camera,
  Code,
  CuboidIcon,
  FileText,
  Layers,
  LayoutGrid,
  Palette,
  Sparkles,
  Star,
  Type,
  Video,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

const DashboardPage = () => {
  const apps = [
    {
      name: "PixelMaster",
      icon: "/logolar/meb/milli-egitim-logo.png",
      description: "Advanced image editing and composition",
      category: "Creative",
      recent: true,
      new: false,
      progress: 100,
    },
    {
      name: "VectorPro",
      icon: "/logolar/egm/egm-logo.png",
      description: "Professional vector graphics creation",
      category: "Creative",
      recent: true,
      new: false,
      progress: 100,
    },
    {
      name: "VideoStudio",
      icon: <Video className="text-pink-500" />,
      description: "Cinematic video editing and production",
      category: "Video",
      recent: true,
      new: false,
      progress: 100,
    },
    {
      name: "MotionFX",
      icon: <Sparkles className="text-blue-500" />,
      description: "Stunning visual effects and animations",
      category: "Video",
      recent: false,
      new: false,
      progress: 100,
    },
    {
      name: "PageCraft",
      icon: <Layers className="text-red-500" />,
      description: "Professional page design and layout",
      category: "Creative",
      recent: false,
      new: false,
      progress: 100,
    },
    {
      name: "UXFlow",
      icon: <LayoutGrid className="text-fuchsia-500" />,
      description: "Intuitive user experience design",
      category: "Design",
      recent: false,
      new: true,
      progress: 85,
    },
    {
      name: "PhotoLab",
      icon: <Camera className="text-teal-500" />,
      description: "Advanced photo editing and organization",
      category: "Photography",
      recent: false,
      new: false,
      progress: 100,
    },
    {
      name: "DocMaster",
      icon: <FileText className="text-red-600" />,
      description: "Document editing and management",
      category: "Document",
      recent: false,
      new: false,
      progress: 100,
    },
    {
      name: "WebCanvas",
      icon: <Code className="text-emerald-500" />,
      description: "Web design and development",
      category: "Web",
      recent: false,
      new: true,
      progress: 70,
    },
    {
      name: "3DStudio",
      icon: <CuboidIcon className="text-indigo-500" />,
      description: "3D modeling and rendering",
      category: "3D",
      recent: false,
      new: true,
      progress: 60,
    },
    {
      name: "FontForge",
      icon: <Type className="text-amber-500" />,
      description: "Typography and font creation",
      category: "Typography",
      recent: false,
      new: false,
      progress: 100,
    },
    {
      name: "ColorPalette",
      icon: <Palette className="text-purple-500" />,
      description: "Color scheme creation and management",
      category: "Design",
      recent: false,
      new: false,
      progress: 100,
    },
  ];
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <div className="bg-muted/50 mx-auto h-24 w-full max-w-6xl rounded-xl" />
          <div className="bg-muted/50 mx-auto h-full w-full max-w-6xl rounded-xl">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Recent Apps</h2>
                <Button variant="ghost" className="rounded-2xl">
                  View All
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <Card className="overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Image
                          src={apps[0].icon.toString()}
                          height={50}
                          width={50}
                          alt="disisleri"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-2xl"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <CardTitle className="text-lg">{apps[0].name}</CardTitle>
                      <CardDescription>{apps[0].description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="secondary"
                        className="w-full rounded-2xl"
                      >
                        Open
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div>
                  <Card className=" overflow-hidden rounded-3xl border-2 hover:border-primary/50 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Image
                          src={apps[1].icon.toString()}
                          height={50}
                          width={50}
                          alt="disisleri"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-2xl"
                        >
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <CardTitle className="text-lg">{apps[0].name}</CardTitle>
                      <CardDescription>{apps[0].description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="secondary"
                        className="w-full rounded-2xl"
                      >
                        Open
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

             
            </section>
           
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardPage;
