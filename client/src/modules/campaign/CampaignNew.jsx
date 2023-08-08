import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/imageUploader", ImageUploader);
import axios from "axios";

import FormRow from "../../components/common/FormRow";
import FormGroup from "../../components/common/FormGroup";
import Label from "../../components/label/Label";
import { InputBoundary } from "../../components/input/Input";
import Textarea from "../../components/input/Textarea";
import { Dropdown } from "../../components/dropdown";
import Button from "../../components/button/Button";

const CampaignNew = () => {
    const { handleSubmit, control } = useForm();
    const [content, setContent] = useState("");
    const handleAddNewCampaign = (values) => {
        console.log(values);
    };
    const modules = useMemo(
        () => ({
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["link", "image"],
            ],
            imageUploader: {
                upload: async (file) => {
                    const bodyFormData = new FormData();
                    bodyFormData.append("image", file);
                    const response = await axios({
                        method: "post",
                        // url: imgbbAPI,
                        data: bodyFormData,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    return response.data.data.url;
                },
            },
        }),
        []
    );
    return (
        <div className="bg-white rounded-[10px] py-10 px-[66px]">
            <div className="text-center">
                <h1 className="inline-block mb-10 text-2xl font-bold py-4 px-[60px] text-text2 bg-text4 bg-opacity-10 rounded-[10px]">
                    Start a Campaign 🚀
                </h1>
                <form onSubmit={handleSubmit(handleAddNewCampaign)}>
                    <FormRow>
                        <FormGroup>
                            <Label>Campaign Title *</Label>
                            <InputBoundary
                                control={control}
                                placeholder="Write a title"
                                name="title"
                            ></InputBoundary>
                        </FormGroup>
                        <FormGroup>
                            <Label>Select a category *</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select a category"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>Education</Dropdown.Option>
                                    <Dropdown.Option>
                                        Real Estate
                                    </Dropdown.Option>
                                    <Dropdown.Option>
                                        Accessories
                                    </Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                    </FormRow>
                    <FormGroup>
                        <Label>Short Description *</Label>
                        <Textarea
                            name="short_description"
                            control={control}
                            placeholder="Write a short description...."
                        ></Textarea>
                    </FormGroup>
                    <FormGroup>
                        <Label>Story *</Label>
                        <div className="w-full">
                            <ReactQuill
                                placeholder="Write your story......"
                                modules={modules}
                                theme="snow"
                                value={content}
                                onChange={setContent}
                            ></ReactQuill>
                        </div>
                    </FormGroup>
                    <div className="w-full flex items-center gap-x-5 text-white bg-secondary px-11 py-8 rounded-[10px] text-2xl font-bold mb-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>You will get 90% of total raised</p>
                    </div>
                    <FormRow>
                        <FormGroup>
                            <Label>Goal *</Label>
                            <InputBoundary control={control} placeholder="$0.00 USD" name="goal"></InputBoundary>
                        </FormGroup>
                        <FormGroup>
                            <Label>Raised Amount *</Label>
                            <InputBoundary control={control} placeholder="$0.00 USD" name="amount"></InputBoundary>
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup>
                            <Label>Amount Prefilled</Label>
                            <InputBoundary control={control} placeholder="Amount Prefilled" name="prefilled"></InputBoundary>
                            <p className="text-text3 text-left text-sm mt-[5px]">It will help fill amount box by click, place each amount by comma, ex: 10,20,30,40</p>
                        </FormGroup>
                        <FormGroup>
                            <Label>Video</Label>
                            <InputBoundary control={control} placeholder="Video" name="video"></InputBoundary>
                            <p className="text-text3 text-left text-sm mt-[5px]">Place Youtube or Vimeo Video URL</p>
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup>
                            <Label>Campaign End Method</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>Education</Dropdown.Option>
                                    <Dropdown.Option>Real Estate</Dropdown.Option>
                                    <Dropdown.Option>Accessories</Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                        <FormGroup>
                            <Label>Counrty</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>Vietnam</Dropdown.Option>
                                    <Dropdown.Option>Russia</Dropdown.Option>
                                    <Dropdown.Option>Cuba</Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                    </FormRow>
                    <FormRow>
                        <FormGroup>
                            <Label>Start Date</Label>
                            <InputBoundary control={control} placeholder="Start Date" name="start_date"></InputBoundary>
                        </FormGroup>
                        <FormGroup>
                            <Label>End Date</Label>
                            <InputBoundary control={control} placeholder="End Date" name="end_date"></InputBoundary>
                        </FormGroup>
                    </FormRow>
                    <div className="mt-10">
                        <Button type="submit" kind="primary" className="px-10 mx-auto">Submit new campaign</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CampaignNew;
