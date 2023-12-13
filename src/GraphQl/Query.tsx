import { gql, useQuery } from '@apollo/client';

export const GET_ALL_USERS = gql`
query {
    getAllUser {
      id
      name
      email
    }
  }
`;
export const GET_ALL_PROVINCE=async()=>{
const getAllProvince=gql`
query{ getAllProvince{
     id
     name
     type
     locationList{
       id
       name
       locationList{
         id
         name
       }}}}`;  
return useQuery(getAllProvince);
   }
export const FIND_LOCATION_BY_ID=gql`
query{
    findLocationById(id:"1"){
     locationList{
       name
       id
     }
   }
   }
`
;
export const GET_HOSPITAL_BY_ID=async(id:string|undefined)=>{
    const hospitalDetail=gql`
    query GetHospitalById($id: ID!) {
        getHospitalById(id: $id) {
          id
          name
        }
    }
    `;
    return (useQuery(hospitalDetail,{ variables:{id:id}}));
   
};
 