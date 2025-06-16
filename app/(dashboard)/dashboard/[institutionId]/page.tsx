import Slug from "@/components/dashboardcomponents/slug/Slug";


const SingleInstitution = async ({
  params,
}: {
  params: Promise<{ institutionId: number }>;
}) => {
  const { institutionId } = await params;
 

  
    return (
      <div>
        <Slug singleInstitutionId={institutionId} />
      </div>
    );
 
};

export default SingleInstitution;
