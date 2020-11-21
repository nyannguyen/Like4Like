import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseWallet } from 'src/redux/actions/User';

const LikeList = () => {
    const [data] = useState([...useSelector(state => state.Request)]);
    const dispatch = useDispatch();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
    })

    function onPostClick(data) {
        let url = "";
        switch(data.type){
          case "post" :
            url = `https://www.facebook.com/plugins/confirm/post/like/popup/?token=S%3A_I${data.userId}%3A${data.id}&href=https%3A%2F%2Fwww.facebook.com%2Fplugins%2Fpost.php%3Fapp_id%26channel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfbe20243ca774%2526domain%253Dlocalhost%2526origin%253Dhttp%25253A%25252F%25252Flocalhost%25253A3000%25252Ff102c56a8baee4c%2526relation%253Dparent.parent%26container_width%3D565%26href%3Dhttps%253A%252F%252Fwww.facebook.com%252Fnyan.ntn%252Fposts%252F${data.url}%26lazy%3Dtrue%26locale%3Den_US%26sdk%3Djoey&iframe_referer=http%3A%2F%2Flocalhost%3A3000%2F`;
            break;
          case "page" :
            url = `https://www.facebook.com/v3.2/plugins/error/confirm/page?iframe_referer=http%3A%2F%2Flocalhost%3A3000%2F&kid_directed_site=false&secure=true&plugin=page&return_params=%7B%22app_id%22%3A%22%22%2C%22channel%22%3A%22https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2f90d5a6ba39e%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%253A3000%252Ff11bf75e226fdc4%26relation%3Dparent.parent%22%2C%22container_width%22%3A%22565%22%2C%22hide_cover%22%3A%22false%22%2C%22href%22%3A%22https%3A%2F%2Fwww.facebook.com%2F${data.id}%22%2C%22locale%22%3A%22en_US%22%2C%22sdk%22%3A%22joey%22%2C%22show_facepile%22%3A%22false%22%2C%22ret%22%3A%22sentry%22%2C%22act%22%3Anull%7D`;
            break;
          default: 
            break;
        }
        var likePopup = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
        var popupTick = setInterval(function() {
          if (likePopup.closed) {
            clearInterval(popupTick);
            console.log('Check credit');
            dispatch(increaseWallet(data.value))
          }
        }, 500);
      }

    return (
        <>
            <div className="page-title">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                        <div className="d-inline-block">
                            <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Like Requests</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    data.map(request => {
                        return(
                            <div key={request.url} className="col-12 col-md-6">
                                <div className="card hover-shadow-lg">
                                    <div className="card-body text-center overflow-hidden">
                                        {
                                        request.type==="post"?<div data-width="470" className="fb-post" data-href={request.url}></div>:null
                                        }
                                        {
                                        request.type==="page"?
                                            <div className="fb-page" 
                                            data-width="470" 
                                            data-href={request.url}
                                            data-hide-cover="false"
                                            data-show-facepile="false"></div>          
                                        :null
                                        }
                                    </div>
                                    <div className="card-footer">
                                        <div className="actions d-flex justify-content-between px-4">
                                            <a onClick={()=>onPostClick(request)} className="action-item">
                                                <i className="far fa-thumbs-up"></i> Like
                                            </a>
                                            <a className="action-item text-danger">
                                                <i className="fas fa-trash-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default LikeList