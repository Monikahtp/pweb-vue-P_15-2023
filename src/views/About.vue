<template>
    <div class="about-us">
      <h2 class="section-title">Meet Our Team</h2>
      <div class="team-members">
        <div class="team-member">
          <div class="circle-background">
            <img src="../assets/jidan.jpg" alt="Team Member 1">
          </div>
          <h3>Zidan</h3>
          <p>50272252</p>
          <p>ngoding dikit</p>
        </div>
        <div class="team-member">
          <div class="circle-background">
            <img src="../assets/monic.jpg" alt="Team Member 2">
          </div>
          <h3>Monic</h3>
          <p>5027221011</p>
          <p>ngoding dikit</p>
        </div>
        <div class="team-member">
          <div class="circle-background">
            <img src="../assets/etha.jpg" alt="Team Member 3">
          </div>
          <h3>Etha</h3>
          <p>5027221017</p>
          <p>ngoding dikit</p>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .about-us {
    text-align: center;
    padding: 60px;
  }
  
  .section-title {
    font-size: 28px;
    margin-bottom: 20px;
    color: #333;
  }
  
  .team-members {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  
  .team-member {
    margin: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .circle-background {
    width: 250px;
    height: 250px;
    background-color: var(--blue);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
  }
  
  .team-member img {
    width: 200px; 
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .team-member h3 {
    margin-top: 10px;
    font-size: 20px;
    color: #333;
  }
  
  .team-member p {
    margin-top: 8px;
    font-size: 16px;
    color: #777;
  }
  </style>
  
