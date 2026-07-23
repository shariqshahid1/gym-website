import { redirect } from "next/navigation";
import BookingForm from "@/components/booking-form";
import MembershipSubscribe from "@/components/membership-subscribe";
import Container from "@/components/ui/container";
import { getUserFromCookie } from "@/lib/auth";
import { findUserById, findBookingsByEmail } from "@/lib/store";
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

  const user = findUserById(sessionUser.userId);
  if (!user) {
    redirect("/auth");
  }

  const bookings = findBookingsByEmail(user.email, 5);

  const membershipActive = user.membership?.status === "active";
  const planName = user.membership?.plan || "No plan";
  const billingCycle = user.membership?.billingCycle || "";

  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="space-y-8">
        {/* Welcome header */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#111] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">Dashboard</p>
          <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Welcome back, {user.name}.</h1>
          <p className="mt-1 text-sm text-white/40">{user.email}</p>
          <div className="mt-4">
            <span className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${
              membershipActive
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-white/5 text-white/40 border border-white/[0.08]"
            }`}>
              <span className={`h-1.5 w-1.5 rounded-full ${membershipActive ? "bg-emerald-400" : "bg-white/30"}`} />
              {membershipActive ? `${planName} Active` : "No Active Plan"}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Dumbbell, label: "Plan", value: planName },
            { icon: CreditCard, label: "Billing", value: billingCycle || "N/A" },
            { icon: CalendarCheck, label: "Joined", value: new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric" }) },
            { icon: TrendingUp, label: "Status", value: membershipActive ? "Active" : "Inactive" }
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-xl border border-white/[0.08] bg-[#111] p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-2">
                    <Icon size={16} className="text-white/50" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/35">{stat.label}</p>
                    <p className="text-sm font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Forms */}
        <div className="grid gap-4 lg:grid-cols-2">
          <MembershipSubscribe />
          <BookingForm />
        </div>

        {/* Recent Bookings */}
        {bookings.length > 0 && (
          <div className="rounded-2xl border border-white/[0.08] bg-[#111] p-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <CalendarCheck size={16} className="text-red-400" />
              Recent Bookings
            </h3>
            <div className="mt-4 space-y-2">
              {bookings.map((booking) => (
                <div key={booking._id} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-white">{booking.service}</p>
                    <p className="text-xs text-white/35">
                      {new Date(booking.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                    </p>
                  </div>
                  <span className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
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
