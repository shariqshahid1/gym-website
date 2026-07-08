import AuthForm from "@/components/auth-form";
import Container from "@/components/ui/container";

export const metadata = {
  title: "Account"
};

export default function AuthPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <AuthForm />
      </Container>
    </section>
  );
}
