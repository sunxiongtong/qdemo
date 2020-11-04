import React from 'react';
import './index.scss';

let mockData = [{
    id: 1, info: '模拟图片1', imgSrc: 'src1', canGetId: true
}, {
    id: 2, info: '模拟图片2', imgSrc: 'src2', canGetId: false
}, {
    id: 3, info: '模拟图片3', imgSrc: 'src3', canGetId: true
}, {
    id: 4, info: '模拟图片4', imgSrc: 'src4', canGetId: true
}, {
    id: 5, info: '模拟图片5', imgSrc: 'src5', canGetId: false
}, {
    id: 6, info: '模拟图片6', imgSrc: 'src6', canGetId: true
}, {
    id: 7, info: '模拟图片7', imgSrc: 'src7', canGetId: false
}, {
    id: 8, info: '模拟图片8', imgSrc: 'src8', canGetId: true
}, {
    id: 9, info: '模拟图片9', imgSrc: 'src9', canGetId: true
},]

class Shop extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mockData: mockData
        }
    }

    getId(e) {
        console.log("获取元素", e.target)
        console.log("获取到Id是", e.target.dataset.id)
    }

    delId(e) {
        const { mockData } = this.state;
        let newData = JSON.parse(JSON.stringify(mockData));
        console.log("我删除了Id",e.target.dataset.id)
        newData = newData.filter((item) => {
            return item.id != e.target.dataset.id
        })

        this.setState({
            mockData: newData
        })
    }

    render() {
        const { mockData } = this.state;

        return (
            <div className="shop-page">
                {
                    mockData.map((img) => {
                        return <div className="shop-box" key={img.id}>
                            <div className="top">
                                <div className="shop-img">{img.imgsrc}</div>
                                <div className="shop-info">{img.info}</div>
                            </div>
                            <div className="bottom">
                                {
                                    img.canGetId ?
                                        <span onClick={this.getId.bind(this)} data-id={img.id}>获取id</span> : <span data-id={img.id} onClick={this.delId.bind(this)}>删除id</span>
                                }
                            </div>
                        </div>
                    })
                }
            </div >
        )
    }
}

export default Shop;