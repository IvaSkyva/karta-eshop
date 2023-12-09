import React from 'react';
import "./style.css"

const Card =() => {
  return (
    <>
      <div className="container">
  <div className="card">
    <div className="imgBx">
      <img src="https://static.lenovo.com/mea/campaign/newmonitors/images/Thinkvision/T-series/T34w-20/T34w-1.png" />
    </div>

    <div className="contentBx">
      <h2>Monitory</h2>

      <div className="size">
      <h4>Velikost displeje:</h4>
        <div className="color">
          <span>21"</span> 
          <span>22"</span>
          <span>23"</span>
          <span>24"</span>
          <span>25"</span>
          <span>26"</span> 
          <span>27"</span>
          <span>28"</span>
        </div>
     </div>

        <div className="size">
         <a href="#">Vybrat</a>
         </div>  
    </div>
  </div>
</div>
    </>
  );
}

export default Card;