const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const func = async () => {
  const response = await versions.ping() // 调用主进程的 ping 函数
  console.log(response) // 输出 'pong'
}

func()