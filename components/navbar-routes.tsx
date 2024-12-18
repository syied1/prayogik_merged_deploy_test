// @ts-nocheck

"use client";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";
import { LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchInput } from "./search-input";
import UserProfileMenus from "./userProfileMenus";

export const NavbarRoutes = () => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/dashboard">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <Button size="sm" variant="outline">
              Teacher mode
            </Button>
          </Link>
        ) : null}

        <UserProfileMenus session={session} />
      </div>
    </>
  );
};
