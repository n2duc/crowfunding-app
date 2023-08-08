import { useForm } from "react-hook-form";
import FormRow from "../components/common/FormRow";
import FormGroup from "../components/common/FormGroup";
import Label from "../components/label/Label";
import { Dropdown } from "../components/dropdown";
import Payment from "../modules/payment/Payment";
import ContributionSummury from "../modules/payment/ContributionSummury";
import Checkbox from "../components/checkbox/Checkbox";
import { InputBoundary } from "../components/input/Input";

const ShippingPage = () => {
    const { control } = useForm();
    return (
        <div className="flex items-start w-full gap-x-[74px]">
            <div className="flex-1">
                <h2 className="font-bold text-[30px] leading-normal mb-10">
                    Shipping Address
                </h2>
                <FormRow>
                    <FormGroup>
                        <Label>First Name *</Label>
                        <InputBoundary
                            control={control}
                            name="first_name"
                            placeholder="John"
                        ></InputBoundary>
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name *</Label>
                        <InputBoundary
                            control={control}
                            name="last_name"
                            placeholder="Doe"
                        ></InputBoundary>
                    </FormGroup>
                </FormRow>
                <FormGroup>
                    <Label>Country *</Label>
                    <Dropdown>
                        <Dropdown.Select placeholder="Select country"></Dropdown.Select>
                        <Dropdown.List></Dropdown.List>
                    </Dropdown>
                </FormGroup>
                <FormRow>
                    <FormGroup>
                        <Label>Street Address *</Label>
                        <InputBoundary
                            control={control}
                            name="address"
                            placeholder="John"
                        ></InputBoundary>
                    </FormGroup>
                    <FormGroup>
                        <Label>City *</Label>
                        <InputBoundary
                            control={control}
                            name="city"
                            placeholder="Doe"
                        ></InputBoundary>
                    </FormGroup>
                </FormRow>
                <FormRow>
                    <FormGroup>
                        <Label>Postal Code *</Label>
                        <InputBoundary
                            control={control}
                            name="code"
                            placeholder="123456"
                        ></InputBoundary>
                    </FormGroup>
                    <FormGroup>
                        <Label>Phone Number *</Label>
                        <InputBoundary
                            control={control}
                            name="phone"
                            placeholder="+123 456 789"
                        ></InputBoundary>
                    </FormGroup>
                </FormRow>
                <div className="flex items-center gap-x-5 mb-11">
                    <Checkbox>Remember this address for next time use</Checkbox>
                </div>
                <h2 className="font-bold text-[30px] leading-normal mb-10">
                    Payment
                </h2>
                <Payment></Payment>
            </div>
            <div className="flex-1 max-w-[462px] ml-auto">
                <ContributionSummury></ContributionSummury>
            </div>
        </div>
    );
};

export default ShippingPage;