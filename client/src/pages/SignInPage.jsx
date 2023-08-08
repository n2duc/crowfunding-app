import { useForm } from "react-hook-form";
import { LayoutAuthenticationErrorBoundary } from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import FormGroup from "../components/common/FormGroup";
import Label from "../components/label/Label";
import { InputBoundary } from "../components/input/Input";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import { useState } from "react";
import Button from "../components/button/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ButtonGoogle from "../components/button/ButtonGoogle";

const schema = yup
    .object({
        email: yup.string().required("This field is required").email(" "),
        password: yup.string().required("This field is required").min(8, "Password must be 8 character"),
    })

const SignInPage = () => {
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    })
    const [showPassword, setShowPassword] = useState(false);
    const handleSignIn = (values) => {
        console.log(values);
    }
    return (
        <LayoutAuthenticationErrorBoundary heading="Welcome Back!">
            <p className="text-center text-text3 text-xs mb-[25px] lg:text-sm lg:mb-[30px]">
                Dont have an account?{" "} 
                <Link to="/sign-up" className="text-primary underline font-medium">Sign up</Link>
            </p>
            <ButtonGoogle text="Sign in with google"></ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-y-[10px]">
                <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <InputBoundary control={control} type="email" name="email" placeholder="example@gmail.com" error={errors.email?.message}></InputBoundary>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password *</Label>
                    <InputBoundary control={control} type={`${showPassword ? "text" : "password"}`} name="password" placeholder="Enter Password" error={errors.password?.message}>
                        <IconEyeToggle open={showPassword} onClick={() => setShowPassword(!showPassword)}></IconEyeToggle>
                    </InputBoundary>
                </FormGroup>
                <FormGroup>
                    <span className="text-sm font-medium text-primary py-[10px] text-right">Forgot password</span>
                </FormGroup>
                <Button type="submit" className="w-full" kind="primary" isLoading={isSubmitting}>Sign in</Button>
            </form>
        </LayoutAuthenticationErrorBoundary>
    );
};

export default SignInPage;