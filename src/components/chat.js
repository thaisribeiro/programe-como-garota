import React from 'react'
class Chat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: null
        }
    }

    getWatsonMessageAndInsertTemplate(text = '') {
        const uri = 'https://shrouded-wave-96094.herokuapp.com/conversation/';

        fetch(uri, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text,
                context,
            }),
        }).then((response) => {
            response = response.json()
            context = response.context

            const template = this.templateChatMessage(response.output.text, 'watson');
            this.InsertTemplateInTheChat(template)


            if (response.output.options) {
                document.querySelector('p').insertAdjacentHTML('afterend', `<div class="options-dialog" id="${response.output.title}"></div>`);
                const options = response.output.options
                let elementsHTML = ''
                options.forEach(option => {
                    const html_option = `<a href="#" class="input-option" id="${option.value.input.text}" onclick="dialogOption(this)">${option.label}</a><br>`
                    elementsHTML += html_option
                })

                document.getElementById(`${response.output.title}`).insertAdjacentHTML('afterbegin', elementsHTML)
            }
        })

    }

    dialogOption(option) {
        this.getWatsonMessageAndInsertTemplate(option.innerHTML)

        const template = this.templateChatMessage(option.innerHTML, 'user')
        this.InsertTemplateInTheChat(template)
    }

    templateChatMessage(message, from) {
        return `
        <div class="from-${from}">
          <div class="message-inner">
            <p>${message}</p>
          </div>
        </div>
        `
    }

    InsertTemplateInTheChat(template) {
        const div = document.createElement('div')
        div.innerHTML = template

        document.getElementById('chat').appendChild(div)
    }
    change(event) {
        console.log('EVENE',this.state.name, event.target.value)
        if (event.keyCode == 13 && event.target.value) {
            this.getWatsonMessageAndInsertTemplate(event.target.value)

            const template = this.templateChatMessage(event.target.value, 'user')
            this.InsertTemplateInTheChat(template)

            this.setState({ name: event.target.value })

        }
    }

    render() {
        return (
            <div className="chat-column">
                <div id="chat"></div>
                <label className="inputOutline">
                    <input id="textInput" value={this.state.name}
                        className=" input responsive-column"
                        autoFocus
                        type="text" onKeyDown={(e) => this.change(e)}></input>
                </label>
            </div>
        )
    }
}

export default Chat