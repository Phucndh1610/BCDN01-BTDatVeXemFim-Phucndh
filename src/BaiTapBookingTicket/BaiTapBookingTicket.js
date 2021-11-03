import React, { Component } from 'react'
import './BaiTapBookingTicket.css';
import ThongTinHangGhe from './ThongTinHangGhe';
import danhSachGheData from '../../src/data/danhSachGhe.json'
import HangGhe from './HangGhe';
export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }
    render() {
        return (
            <div className="bookingMovie" style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'fixed', width: '100%', height: '100%' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center">
                                <div className="text-warning display-4 ">ĐẶT VÉ XEM PHIM HAY</div>
                                <div className="mt-3 text-light" style={{ fontSize: '25px' }}>Màn Hình</div>
                                <div className="mt-2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div className="screen">

                                    </div>
                                    {this.renderHangGhe()}
                                </div>

                            </div>
                            <div className="col-4">
                                <div className="text-white display-4 pt-5 text-center" style={{ fontSize: '30px' }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinHangGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
