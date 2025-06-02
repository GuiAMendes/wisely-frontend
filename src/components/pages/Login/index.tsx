// External Libraries
import React from "react";
import Image from "next/image";

// Components
import { Input } from "@components/tookit/Input";
import { Button } from "@components/tookit/buttons/Button";
import { Typography } from "@components/tookit/Typography";

// Hooks
import { useLogin } from "./hooks/useLogin";

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

export const Login: React.FC = () => {
  // Hooks
  const { errors, loginInfos, handleChange, handleLogin } = useLogin();

  // Function
  const handleSubmit = (event?: React.FormEvent) => {
    event?.preventDefault();

    handleLogin();
  };

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image
            fill
            priority
            sizes="10rem"
            src="/images/gatinho.webp"
            alt="Cute kitten looking forward"
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>

        <Card onSubmit={handleSubmit}>
          <TextWrapper>
            <Typography $variant="h1">Welcome back!</Typography>

            <Typography
              $variant="p"
              fontWeight="bold"
              color={theme.colors.text.secondary}
            >
              Enter your details
            </Typography>
          </TextWrapper>

          <InputsWrapper>
            <Input
              required
              label="Email:"
              errors={errors?.email}
              placeholder="Enter your  email"
              value={loginInfos.email}
              onChangeText={(value) => handleChange({ email: value })}
            />

            <Input
              required
              type="password"
              label="Password:"
              errors={errors?.password}
              placeholder="10+ characters"
              value={loginInfos.password}
              onChangeText={(value) => handleChange({ password: value })}
            />
          </InputsWrapper>

          <Button type="submit" label="Sign in" onClick={handleLogin} />

          <TextLinkWrapper>
            <Typography $variant="p" color={theme.colors.text.secondary}>
              Don´t have an account?
            </Typography>
            <StyledLink href="./signup">
              <Typography $variant="p" fontWeight="bold">
                Sign up for free
              </Typography>
            </StyledLink>
          </TextLinkWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};
