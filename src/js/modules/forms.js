const forms = () => {
    console.log('Hid');
    const form = document.querySelectorAll('form'),
        inputNumber = document.querySelectorAll('input[name="user_phone"]');

    inputNumber.forEach(item => {
        item.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '');
        });
    });

    const messages = {
        success: 'Data has sent',
        error: 'Data has not sent',
        loading: 'Data is sending'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = messages.loading;
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('assets/server.php', json)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = messages.success;
                })
                .catch(() => statusMessage.textContent = messages.error)
                .finally(() => {
                    form.forEach(item => {
                        item.reset();
                    });
                    setTimeout(() => statusMessage.textContent = '', 2000);
                });
        });
    });
};

export default forms;