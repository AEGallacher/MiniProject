import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navtest.css';

function NavTest() {

    var tabsNewAnim = $('#navbar-animmenu');
		var selectorNewAnim = $('#navbar-animmenu').find('li').length;
		//var selectorNewAnim = $(".tabs").find(".selector");
		var activeItemNewAnim = tabsNewAnim.find('.active');
		var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
		var itemPosNewAnimLeft = activeItemNewAnim.position();
		$(".hori-selector").css({
			"left":itemPosNewAnimLeft.left + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
		$("#navbar-animmenu").on("click","li",function(e){
			$('#navbar-animmenu ul li').removeClass("active");
			$(this).addClass('active');
			var activeWidthNewAnimWidth = $(this).innerWidth();
			var itemPosNewAnimLeft = $(this).position();
			$(".hori-selector").css({
				"left":itemPosNewAnimLeft.left + "px",
				"width": activeWidthNewAnimWidth + "px"
			});
    });
  
    return (
      
      <>
        <div id="navbar-animmenu">
        <ul class="show-dropdown main-navbar">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li>
              Test
                {/* <a href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Dashboard</a> */}
            </li>
            <li class="active">
              Test  
                {/* <a href="javascript:void(0);"><i class="far fa-address-book"></i>Address Book</a> */}
            </li>
            <li>
              Test
                {/* <a href="javascript:void(0);"><i class="far fa-clone"></i>Components</a> */}
            </li>
            <li>
              Test
                {/* <a href="javascript:void(0);"><i class="far fa-calendar-alt"></i>Calendar</a> */}
            </li>
            <li>
              Test
                {/* <a href="javascript:void(0);"><i class="far fa-chart-bar"></i>Charts</a> */}
            </li>
            
            
        </ul>
    </div>
      </>
    )
  }
  
  export default NavTest