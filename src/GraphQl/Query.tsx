import { gql, useQuery } from '@apollo/client';

export const GET_ALL_USERS =()=> {
const getAllUser=gql`
query {
    getAllUser {
      id
      name
      email
      role
    }
  }
`;
return useQuery(getAllUser);
}
// export const GET_USER_BY_ID =(id:any)=> {
//   const findUserById=gql`
//   query GetHospitalById($id: ID!) {
//     findUserById(id: $id) {
//         id
//         name
//         email
//       }
//     }
//   `;
//   const identity=parseInt(id);
//   return (useQuery(findUserById,{ variables:{id:identity}}));
//   }
  export const GET_USER_BY_ID=(id:string|undefined)=>{
    const getUserDetail=gql`
    query FindUserById($id: ID!) {
      findUserById(id: $id) {
        id
        name
      }
  }
  `;
  return (useQuery(getUserDetail,{ variables:{id:id}}));};

export const GET_ALL_PROVINCE=()=>{
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
    return (useQuery(hospitalDetail,{ variables:{id:id}}));};

 export const GET_ALL_HOSPITAL=()=>{
        const hospitalDetail=gql`
        query{
            getAllHospital{
              id
              name
              location{
                id
                name
                location{
                    name
                }
              }
            }
        }
        `;
        return (useQuery(hospitalDetail));};
