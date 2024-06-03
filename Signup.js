import React, { useState } from 'eact';
import { signin, signInWithGoogle, signInWithGitHub } from '../helpers/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,