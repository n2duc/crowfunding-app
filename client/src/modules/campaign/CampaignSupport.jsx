import { useForm } from "react-hook-form";
import { InputBoundary } from "../../components/input/Input";
import Button from "../../components/button/Button";

const CampaignSupport = () => {
    const { control } = useForm();
    return (
        <div>
            <h2 className="mb-5 text-lg font-semibold">Support</h2>
            <div className="flex flex-col w-full px-6 bg-white shadow-1 py-6 rounded-[10px]">
                <p className="mb-5 text-xl text-center font-medium text-text3">
                    Pledge without reward
                </p>
                <InputBoundary
                    placeholder="$10"
                    control={control}
                    name="Pledge"
                    className="w-full px-5 py-[10px] mb-5 text-lg font-medium border rounded border-strock"
                ></InputBoundary>
                <div className="p-5 mb-5 bg-grayf6 rounded-xl">
                    <p className="mb-5 text-sm font-semibold text-text2">
                        Back it because you believe in it.
                    </p>
                    <p className="text-sm text-text3">
                        Support the project for no reward, just because it
                        speaks to you.
                    </p>
                </div>
                <Button className="w-full text-white bg-secondary">
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default CampaignSupport;