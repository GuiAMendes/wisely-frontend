// External Libraries
import React from "react";
import Image from "next/image";

// Components
import { Input } from "@components/tookit/Input";
import { Button } from "@components/tookit/buttons/Button";
import { Typography } from "@components/tookit/Typography";

// Hooks
import { useSignUp } from "./hooks/useSignUp";

// Styles
import {
  Card,
  Wrapper,
  Container,
  TextWrapper,
  ImageWrapper,
  StyledLink,
  InputsWrapper,
  TextLinkWrapper,
} from "./styles";
import { theme } from "@globals/theme";

export const SignUp: React.FC = () => {
  // Hooks
  const { errors, signUpInfos, handleChange, handleSignUp } = useSignUp();

  // Function
  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault();

    handleSignUp();
  }

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image
            src="/images/gatinho.webp"
            alt="Cute kitten looking forward"
            fill
            priority
            sizes="10rem"
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>

        <Card onSubmit={handleSubmit}>
          <TextWrapper>
            <Typography $variant="h1">Welcome to Wisely!</Typography>

            <Typography
              $variant="p"
              fontWeight="bold"
              color={theme.colors.text.secondary}
            >
              Register your account
            </Typography>
          </TextWrapper>

          <InputsWrapper>
            <Input
              required
              label="Name:"
              placeholder="Enter your name"
              errors={errors.name}
              value={signUpInfos.name}
              onChangeText={(value) => handleChange({ name: value })}
            />

            <Input
              required
              label="Email:"
              placeholder="Enter your email"
              errors={errors.email}
              value={signUpInfos.email}
              onChangeText={(value) => handleChange({ email: value })}
            />

            <Input
              required
              type="password"
              label="Password:"
              placeholder="10+ characters"
              errors={errors.password}
              value={signUpInfos.password}
              onChangeText={(value) => handleChange({ password: value })}
            />
          </InputsWrapper>

          <Button type="submit" label="Sign up" />

          <TextLinkWrapper>
            <Typography $variant="p" color={theme.colors.text.secondary}>
              Already have an account?
            </Typography>

            <StyledLink href="./login">
              <Typography $variant="p" fontWeight="bold">
                Sign in
              </Typography>
            </StyledLink>
          </TextLinkWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};
