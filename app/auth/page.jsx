import AuthForm from "@/components/auth-form";
import Container from "@/components/ui/container";

export const metadata = {
  title: "Sign In"
};

export default function AuthPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container>
        <AuthForm />
      </Container>
    </section>
  );
}
