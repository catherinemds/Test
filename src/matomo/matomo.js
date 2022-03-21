import {useEffect} from "react";

export default function Matomo() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://cdn.matomo.cloud/catherinemdsportofliovercelapp.matomo.cloud/container_NrtdNiyk.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script)
        }
    }, [])
}

/* <!-- Matomo Tag Manager -->
<script>
var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.async=true; g.src='https://cdn.matomo.cloud/catherinemdsportofliovercelapp.matomo.cloud/container_NrtdNiyk.js'; s.parentNode.insertBefore(g,s);
</script>
<!-- End Matomo Tag Manager --> */