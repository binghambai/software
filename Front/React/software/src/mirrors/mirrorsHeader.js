import React, {Component} from 'react'
import '../css/middleHeader.css'

export default class MirrorsHeader extends Component {
    constructor(props) {
        super(props);


        this.state = {
            val: '',
            needClean: false
        }
    }

    inputChange(e) {

        this.props.msg(e.target.value)

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">

                        <h3 className="h3-title">
                            <span id="span-title-icon" className="glyphicon glyphicon-save-file"/>
                            镜像列表</h3>
                    </div>
                    <div className="col-md-4">
                        <input type="text" id="id-form-control" className="form-control" placeholder="Search for..."
                               onChange={this.inputChange.bind(this)}
                        />
                    </div>

                </div>
                <div id="row-mirrors-name" className="row">
                    <div className="col-md-4">
                        <h4 className="h3-title">Name</h4>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h4 className="h3-title">Date</h4>
                    </div>
                </div>
            </div>
        )
    }
}
