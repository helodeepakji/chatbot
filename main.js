document.getElementById("chat2")
            .addEventListener("keyup", function (e) {
                if (e.keyCode === 13) {
                    document.getElementById("submit").click();
                }
            });


        function user2() {
            var userbox = document.getElementById("chat2").value;
            document.getElementById("chat2").value = "";
            // document.getElementById("messages").innerHTML += userbox + "<br>";
            if (userbox.toLowerCase() in reply) {
                // document.getElementById("messages").innerHTML += reply[userbox.toLowerCase()] + "<br>";
                addChat(userbox, reply[userbox.toLowerCase()]);;
            } else {
                // document.getElementById("messages").innerHTML += "I do not understand... <br>";
                var other = "I do not understand...";
                addChat(userbox, other);
            }

        }


        function addChat(input, product) {
            const messagesContainer = document.getElementById("messages");
            let userDiv = document.createElement("div");
            userDiv.id = "user";
            userDiv.className = "user response";
            userDiv.innerHTML = `<img src="user.png" class="avatar"><span>${input}</span>`;
            messagesContainer.appendChild(userDiv);

            let botDiv = document.createElement("div");
            let botImg = document.createElement("img");
            let botText = document.createElement("span");
            botDiv.id = "bot";
            botImg.src = "bot-mini.png";
            botImg.className = "avatar";
            botDiv.className = "bot response";
            botText.innerText = "Typing...";
            botDiv.appendChild(botText);
            botDiv.appendChild(botImg);
            messagesContainer.appendChild(botDiv);
            // Keep messages at most recent
            messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

            // Fake delay to seem "real"
            setTimeout(() => {
                botText.innerText = `${product}`;
                textToSpeech(product)
            }, 2000
            )

        }

