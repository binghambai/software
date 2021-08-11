import React, { Component } from "react";
import { Tooltip, Whisper, ButtonToolbar,Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
export default class SimplePopover extends Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {
        const tooltip = (
            <Tooltip>
                This is a help <i>tooltip</i> .
            </Tooltip>
        );

        return (
            <div>
                <ButtonToolbar>
                    <Whisper placement="top" trigger="click" speaker={tooltip}>
                        <Button>Click</Button>
                    </Whisper>
                    <Whisper placement="top" trigger="contextMenu" speaker={tooltip}>
                        <Button>ContextMenu</Button>
                    </Whisper>
                    <Whisper placement="top" trigger="focus" speaker={tooltip}>
                        <Button>Focus</Button>
                    </Whisper>
                    <Whisper placement="top" trigger="hover" speaker={tooltip}>
                        <a>Hover</a>
                    </Whisper>

                    <Whisper placement="top" trigger="active" speaker={tooltip}>
                        <Button>Active</Button>
                    </Whisper>
                </ButtonToolbar>
            </div>
        );
    }
}
