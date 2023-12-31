import './App.scss';

import Receipient from './Receipient';
import Transfer from './Transfer';
import Wallet from './Wallet';
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  return (
    <>

      <div className="app">
        <div className="transaction">
          <Wallet
            balance={balance}
            setBalance={setBalance}
            address={address}
            setAddress={setAddress}
          />
          <Receipient
            sendAmount={sendAmount}
            setSendAmount={setSendAmount}
            recipient={recipient}
            setRecipient={setRecipient}
          />
        </div>
        <Transfer
          address={address}
          setBalance={setBalance}
          recipient={recipient}
          sendAmount={sendAmount}
        />
      </div>
    </>
  );
}

export default App;
