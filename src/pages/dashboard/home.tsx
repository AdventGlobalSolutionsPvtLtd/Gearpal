import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/sections/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      {/* -------------------------- */}

      <Header />
      {/* -------------------------- */}
      <div className="px-8 py-8">
        <div className="grid grid-cols-12  gap-4">
          <div className="col-span-8 grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <Card className="shadow-sm rounded-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-normal">Top Errors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Machine1: IRB 0000</p>
                  <p className="text-xs text-muted-foreground">Error Code: PST-B1</p>

                  <div className="h-[50px]"></div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-6">
              <Card className="shadow-sm rounded-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-normal">Root Cause</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">% Probability: 93%</p>
                  <p className="text-xs text-muted-foreground">Over Heated, Powered Down</p>
                  <div className="h-[50px]"></div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-6">
              <Card className="shadow-sm rounded-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-normal">
                    Here's The Root Cause of the Issue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[80px]"></div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-6">
              <Card className="shadow-sm rounded-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-normal">Pdf Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[80px]"></div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* ----------------------------------- */}
          <div className="col-span-4 grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Card className="shadow-sm rounded-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-normal">Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[80px]"></div>
                </CardContent>
              </Card>
            </div>
            <div className="col-span-12">
              <Card className="shadow-sm rounded-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-normal">IRB 6660 Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[80px]"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
