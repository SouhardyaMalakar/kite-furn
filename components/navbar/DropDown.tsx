import React from 'react'
import { Dropdown } from '@nextui-org/react' 
import router, { useRouter } from 'next/router';

function DropDown() {
  let val ='50px';
  return (
    <Dropdown >
      <Dropdown.Button flat css={{background: 'linear-gradient(135deg, #a9d3f1, #82beec)', height:val, color:"white", borderRadius: "5px", boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.187)' }}>Customised Interiors</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions" css={{background: 'linear-gradient(135deg, #a9d3f1, #82beec)'}}>
        <Dropdown.Item key="new" css={{marginBottom:'10px' ,background: 'linear-gradient(135deg, #a9d3f1, #82beec)', boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.187)"}}><button
            onClick={() => {
              router.push('/customInteriors/#hotels');
            }}
            style={{ height:"100%", width : "100%", background: 'linear-gradient(135deg, #a9d3f1, #82beec)', border: '0px', color:"white" }}
          >
            Hotel Interiors
          </button></Dropdown.Item>
          <Dropdown.Item key="new" css={{marginBottom:'10px' ,background: 'linear-gradient(135deg, #a9d3f1, #82beec)', boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.187)"}}><button
            onClick={() => {
              router.push('/customInteriors/#eateries');
            }}
            style={{ height:"100%", width : "100%", background: 'linear-gradient(135deg, #a9d3f1, #82beec)', border: '0px',color:"white" }}
          >
            Bakeries
          </button></Dropdown.Item>
          <Dropdown.Item key="new" css={{marginBottom:'10px' ,background: 'linear-gradient(135deg, #a9d3f1, #82beec)', boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.187)"}}><button
            onClick={() => {
              router.push('/customInteriors/#retails');
            }}
            style={{ height:"100%", width : "100%", background: 'linear-gradient(135deg, #a9d3f1, #82beec)', border: '0px',color:"white" }}
          >
            Departmentals Store
          </button></Dropdown.Item>
          <Dropdown.Item key="new" css={{marginBottom:'10px', height:'60px' ,background: 'linear-gradient(135deg, #a9d3f1, #82beec)', boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.187)"}}><button
            onClick={() => {
              router.push('/customInteriors/#halls');
            }}
            style={{ height:"100%", width : "100%", background: 'linear-gradient(135deg, #a9d3f1, #82beec)', border: '0px',color:"white" }}
          >
            Banquet & Meeting Halls
          </button></Dropdown.Item>
          <Dropdown.Item key="new" css={{marginBottom:'10px' ,background: 'linear-gradient(135deg, #a9d3f1, #82beec)', boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.187)"}}><button
            onClick={() => {
              router.push('/customInteriors/#offices');
            }}
            style={{ height:"100%", width : "100%", background: 'linear-gradient(135deg, #a9d3f1, #82beec)', border: '0px',color:"white" }}
          >
            Offices
          </button></Dropdown.Item>
          <Dropdown.Item key="new" css={{marginBottom:'10px' ,background: 'linear-gradient(135deg, #a9d3f1, #82beec)', boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.187)"}}><button
            onClick={() => {
              router.push('/customInteriors');
            }}
            style={{ height:"100%", width : "100%", background: 'linear-gradient(135deg, #a9d3f1, #82beec)', border: '0px',color:"white" }}
          >
            View More
          </button></Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown