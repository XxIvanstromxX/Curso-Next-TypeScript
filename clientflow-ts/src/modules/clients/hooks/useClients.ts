'use client';

import { useState, useEffect } from 'react';
import type {
  ClientCreateInput,
  ClientCreateOutput,
} from '@/shared/contracts/client.contract';
import { fetchClients, createClientRequest } from '../services/client';

export function useClients() {
  const [clients, setClients] = useState<ClientCreateOutput[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadClients = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchClients();
      setClients(data);
      setLoading(false);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Unknown error';
      setError(message);
    }
  };

  const createClient = async (data: ClientCreateInput) => {
    setError(null);

    try {
      const newClient = await createClientRequest(data);
      setClients((prevClients) => [...prevClients, newClient]);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Unknown error';
      setError(message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadClients();
    };

    fetchData();
  }, []);

  return {
    clients,
    loading,
    error,
    createClient,
    loadClients,
  };
}
