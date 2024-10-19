import { useState } from 'react';

export function useAccountState(initialAccounts) {
  const [accounts, setAccounts] = useState(initialAccounts);

  const updateAccount = (id, newDetails) => {
    setAccounts(accounts.map(account => account.id === id ? { ...account, ...newDetails } : account));
  };

  const deleteAccount = (id) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return { accounts, updateAccount, deleteAccount };
}
