import PostJobForm from "@/components/post-job-form";

function PostJob () {
    


    return (
        <div className="max-w-xl mx-auto mt-24">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Post a Job</h1>
            <PostJobForm/>
        </div>
    );
}

export default PostJob