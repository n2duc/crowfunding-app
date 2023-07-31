import { Link } from "react-router-dom";
import { LayoutAuthenticationErrorBoundary } from "../layout/LayoutAuthentication";
import { useForm } from "react-hook-form";
import Label from "../components/label/Label";
import { InputBoundary } from "../components/input/Input";
import FormGroup from "../components/common/FormGroup";
import Button from "../components/button/Button";
import Checkbox from "../components/checkbox/Checkbox";
import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import ButtonGoogle from "../components/button/ButtonGoogle";

const schenma = yup
    .object({
        name: yup.string().required("This field is required"),
        email: yup.string().required("This field is required").email("Please enter valid Email Address"),
        password: yup.string().required("This field is required").min(8, "Password must be 8 character"),
    })

const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: yupResolver(schenma),
        mode: "onSubmit",
    });
    const handleSignUp = (values) => {
        console.log(values);
    }
    const [term, setTerm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    return (
        <LayoutAuthenticationErrorBoundary heading="Sign Up">
            <p className="text-center text-text3 text-xs mb-[25px] lg:text-sm lg:mb-[30px]">
                Already have an account?{" "} 
                <Link to="/sign-in" className="text-primary underline font-medium">Sign in</Link>
            </p>
            <ButtonGoogle></ButtonGoogle>
            <p className="text-text2 dark:text-white text-center text-xs mb-[5px] lg:mb-5 lg:text-sm">Or sign up with email</p>
            <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-y-[10px]">
                <FormGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <InputBoundary control={control} type="text" name="name" placeholder="Jhon Doe" error={errors.name?.message}></InputBoundary>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email *</Label>
                    <InputBoundary control={control} type="email" name="email" placeholder="example@gmail.com" error={errors.email?.message}></InputBoundary>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password *</Label>
                    <InputBoundary control={control} type={`${showPassword ? "text" : "password"}`} name="password" placeholder="Create a password" error={errors.password?.message}>
                        <IconEyeToggle open={showPassword} onClick={() => setShowPassword(!showPassword)}></IconEyeToggle>
                    </InputBoundary>
                </FormGroup>
                <div className="flex items-start gap-x-5 my-[10px]">
                    <Checkbox name="term" checked={term} onClick={() => setTerm(term => !term)}>
                        <p className="text-xs text-text2 dark:text-text3 flex-1 lg:text-sm">I agree to the <span className="text-secondary underline">Terms of Use</span> and have read and understand the <span className="text-secondary underline">Privacy policy</span>.</p>
                    </Checkbox>
                </div>
                <Button type="submit" className="w-full bg-primary" isLoading={isSubmitting}>Create my account</Button>
            </form>
        </LayoutAuthenticationErrorBoundary>
    );
};

export default SignUpPage;
