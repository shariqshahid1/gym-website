import { redirect } from "next/navigation";
import BookingForm from "@/components/booking-form";
import MembershipSubscribe from "@/components/membership-subscribe";
import Container from "@/components/ui/container";
import { connectToDatabase } from "@/lib/mongodb";
import { getUserFromCookie } from "@/lib/auth";
import User from "@/models/User";

export const metadata = {
  title: "Dashboard"
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const sessionUser = await getUserFromCookie();

  if (!sessionUser?.userId) {
    redirect("/auth");
  }

  await connectToDatabase();
  const user = await User.findById(sessionUser.userId).lean();

  return (
    <section className="py-20">
      <Container className="space-y-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(163,230,53,0.14),rgba(255,255,255,0.04))] p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Dashboard</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Welcome back, {user.name}.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
            Membership status: <span className="text-white">{user.membership?.status || "inactive"}</span> | Plan:{" "}
            <span className="text-white">{user.membership?.plan || "Starter"}</span>
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <MembershipSubscribe />
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
