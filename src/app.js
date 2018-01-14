import React, { Component } from 'react';

import {
    Grid, Center, Card, Paragraph
} from 'components/layout';

class App extends Component {
    render() {
        return (
            <Grid rows="100%" cols="100%">
                <Center>
                    <Card>
                        <Paragraph center>
                            React Bootstrap
                        </Paragraph>
                        <Paragraph noBottomMargin>
                            Made by Simon Petersson
                        </Paragraph>
                    </Card>
                </Center>
            </Grid>
        );
    }
}

export default App;
