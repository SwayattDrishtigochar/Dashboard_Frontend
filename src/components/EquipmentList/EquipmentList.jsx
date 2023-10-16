import EquipmentCard from '../EquipmentCard/EquipmentCard';
import { useGetequipmentsQuery } from '../../slices/api/eqipmentApiSlice';
import Loader from '../Loader/Loader';

const EquipmentList = () => {
  const { data, error, isLoading } = useGetequipmentsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong</p>
      ) : (
        <>
          {data?.map((equipment) => (
            <EquipmentCard key={equipment._id} data={equipment} />
          ))}
        </>
      )}
    </>
  );
};

export default EquipmentList;
