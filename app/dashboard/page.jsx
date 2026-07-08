import { redirect } from "next/navigation";
import Link from "next/link";
import BookingForm from "@/components/booking-form";
import MembershipSubscribe from "@/components/membership-subscribe";
import Container from "@/components/ui/container";
import { connectToDatabase } from "@/lib/mongodb";
import { getUserFromCookie } from "@/lib/auth";
import User from "@/models/User";
import Booking from "@/models/Booking";
import { CalendarCheck, CreditCard, Dumbbell, TrendingUp } from "lucide-react";

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
  const bookings = await Booking.find({ email: user.email }).sort({ createdAt: -1 }).limit(5).lean();

  const membershipActive = user.membership?.status === "active";
  const planName = user.membership?.plan || "Not subscribed";
  const billingCycle = user.membership?.billingCycle || "";
  const subscribedAt = user.membership?.subscribedAt
    ? new Date(user.membership.subscribedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : null;

  return (
    <section className="py-20">
      <Container className="space-y-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(163,230,53,0.14),rgba(255,255,255,0.04))] p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.35em] text-lime-300">Dashboard</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Welcome back, {user.name}.</h1>
            <p className="mt-2 text-sm text-white/60">Email: {user.email}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] ${
                membershipActive
                  ? "bg-lime-500/10 text-lime-300 border border-lime-400/20"
                  : "bg-white/5 text-white/50 border border-white/10"
              }`}>
                <span className={`h-1.5 w-1.5 rounded-full ${membershipActive ? "bg-lime-400" : "bg-white/30"}`} />
                {membershipActive ? `${planName} • Active` : "No Active Plan"}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Dumbbell, label: "Plan", value: planName, color: "from-orange-500/20 to-red-500/10" },
            { icon: CreditCard, label: "Billing", value: billingCycle || "N/A", color: "from-lime-500/20 to-green-500/10" },
            { icon: CalendarCheck, label: "Joined", value: new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }), color: "from-blue-500/20 to-purple-500/10" },
            { icon: TrendingUp, label: "Status", value: membershipActive ? "Active" : "Inactive", color: membershipActive ? "from-lime-500/20 to-green-500/10" : "from-white/5 to-white/5" }
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={`rounded-2xl border border-white/10 bg-[linear-gradient(180deg,${stat.color})] p-5`}>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
                    <Icon size={18} className="text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <MembershipSubscribe />
          <BookingForm />
        </div>

        {bookings.length > 0 && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <CalendarCheck size={20} className="text-orange-300" />
              Recent Bookings
            </h3>
            <div className="mt-6 space-y-3">
              {bookings.map((booking) => (
                <div key={booking._id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">{booking.service}</p>
                    <p className="text-xs text-white/50 mt-0.5">
                      {new Date(booking.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                  <span className="rounded-full border border-lime-400/20 bg-lime-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-lime-300">
                    Confirmed
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
