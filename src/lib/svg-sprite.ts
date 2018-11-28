export default () => {
	const b = document.body;
	b.insertAdjacentHTML(
		'afterbegin',
		`
<svg style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
    <symbol id="icons-home" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
        </defs>
        <path d="M999.103969 450.980217 600.03496 32.435355C559.394816-10.188151 492.394773-10.891714 450.867491 30.861655L26.049704 457.992209C-23.655972 507.968481 1.212199 568.281046 71.688022 567.83196L191.983925 567.065422 156.438281 531.756441 156.438281 917.836305C156.438281 976.336883 203.589196 1023.825676 261.911636 1023.825676L389.99329 1023.825676 389.99329 953.206301 261.911636 953.206301C242.721404 953.206301 227.0793 937.452108 227.0793 917.836305L227.0793 531.756441C227.0793 512.167492 211.12822 496.322622 191.533656 496.447477L71.237753 497.214033C66.173938 497.246289 62.895469 496.713148 61.736428 496.22598 63.980271 497.169102 67.084328 499.993735 69.04654 504.752651 70.980045 509.441972 70.786089 513.494624 69.931418 515.610663 70.455361 514.313455 72.463158 511.484602 76.143505 507.784218L500.961291 80.653664C514.458349 67.083127 535.692465 67.306108 548.901395 81.159669L947.970422 499.704531C951.487338 503.393087 953.386928 506.221746 953.891186 507.578027 953.219595 505.771654 953.125848 502.205128 954.837927 498.082651 956.584273 493.877656 959.306191 491.320776 961.229598 490.464427 960.049848 490.989677 956.841363 491.570786 951.877986 491.602406L952.328255 562.22035C1022.230896 561.774919 1047.266224 501.492949 999.103969 450.980217ZM774.238215 1023.825676C832.500577 1023.825676 879.711571 976.292569 879.711571 917.836305L879.711571 527.597754 844.616195 562.906718 952.328255 562.22035 951.877986 491.602406 844.165926 492.288773C824.747205 492.412516 809.070551 508.184576 809.070551 527.597754L809.070551 917.836305C809.070551 937.402462 793.373788 953.206301 774.238215 953.206301L646.156562 953.206301 646.156562 1023.825676 774.238215 1023.825676ZM582.482144 670.786834C582.575273 670.786834 582.632792 1023.982363 582.632792 1023.982363L653.273812 1023.982363 653.273812 670.618548C653.273812 631.73658 621.484606 600.16746 582.482144 600.16746L441.501384 600.16746C402.513769 600.16746 370.709699 631.646628 370.709699 670.618548L441.350736 670.618548C441.350736 670.806978 582.482144 670.786834 582.482144 670.786834ZM441.350736 670.618548 370.709699 670.618548 370.709699 1023.982363 441.350736 1023.982363 441.350736 670.618548Z" p-id="1836">
        </path>
    </symbol>
    <symbol id="icons-publish" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
        </defs>
        <path d="M512 958.016611c-119.648434 0-232.1288-46.367961-316.736783-130.559656-84.640667-84.255342-131.263217-196.255772-131.263217-315.455235 0-119.168499 46.624271-231.199892 131.232254-315.424271 84.607983-84.191695 197.088348-130.559656 316.736783-130.559656s232.1288 46.367961 316.704099 130.559656c84.67163 84.224378 131.263217 196.255772 131.263217 315.391587 0.032684 119.199462-46.591587 231.232576-131.263217 315.455235C744.1288 911.615966 631.648434 958.016611 512 958.016611zM512 129.983389c-102.623626 0-199.071738 39.743475-271.583282 111.936783-72.480581 72.12794-112.416718 168.063432-112.416718 270.079828s39.903454 197.951888 112.384034 270.047144c72.511544 72.191587 168.959656 111.936783 271.583282 111.936783 102.592662 0 199.071738-39.743475 271.583282-111.936783 72.480581-72.160624 112.416718-168.063432 112.384034-270.079828 0-102.016396-39.903454-197.919204-112.384034-270.016181C711.071738 169.759548 614.592662 129.983389 512 129.983389z" p-id="5394">
        </path>
        <path d="M736.00086 480.00086 544.00086 480.00086 544.00086 288.00086c0-17.664722-14.336138-32.00086-32.00086-32.00086s-32.00086 14.336138-32.00086 32.00086l0 192L288.00086 480.00086c-17.664722 0-32.00086 14.336138-32.00086 32.00086s14.336138 32.00086 32.00086 32.00086l192 0 0 192c0 17.695686 14.336138 32.00086 32.00086 32.00086s32.00086-14.303454 32.00086-32.00086L544.00258 544.00086l192 0c17.695686 0 32.00086-14.336138 32.00086-32.00086S753.696546 480.00086 736.00086 480.00086z" p-id="5395">
        </path>
    </symbol>
    <symbol id="icons-center" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
        </defs>
        <path d="M503.808 58.88c118.272 0 214.528 96.256 214.528 214.528s-96.256 214.528-214.528 214.528-215.04-95.744-215.04-214.528 96.768-214.528 215.04-214.528m0-52.224c-147.456 0-266.752 119.296-266.752 266.752s119.296 266.752 266.752 266.752 266.752-119.296 266.752-266.752c0-146.944-119.296-266.752-266.752-266.752zM613.888 633.344c81.92 0 159.232 32.256 217.6 90.624 58.368 58.368 90.624 135.68 90.624 217.6v22.016H101.888v-22.016c0-81.92 32.256-159.232 90.624-217.6C250.88 665.6 328.192 633.344 410.112 633.344h203.776m0-49.664H410.112c-197.12 0-358.4 161.28-358.4 358.4v60.416c0 4.096 0.512 7.68 0.512 11.776h919.04c0-4.096 0.512-7.68 0.512-11.776V942.08c0.512-197.12-160.768-358.4-357.888-358.4z" p-id="8073">
        </path>
        <path d="M422.912 273.408h-5.12c-11.776 0-21.504-9.728-21.504-21.504v-39.424c0-11.776 9.728-21.504 21.504-21.504h5.12c11.776 0 21.504 9.728 21.504 21.504v39.424c0.512 11.776-9.216 21.504-21.504 21.504zM589.312 273.408h-5.12c-11.776 0-21.504-9.728-21.504-21.504v-39.424c0-11.776 9.728-21.504 21.504-21.504h5.12c11.776 0 21.504 9.728 21.504 21.504v39.424c0.512 11.776-9.216 21.504-21.504 21.504z" p-id="8074">
        </path>
    </symbol>
    <symbol id="icons-backtop" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
        </defs>
        <path d="M819.952 624.789l39.585-39.583-365.721-365.646-365.679 365.646 39.583 39.583 326.12-326.126z" p-id="24878">
        </path>
    </symbol>
    <symbol id="icons-view" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
        </defs>
        <path d="M919.092183 692.511213c-74.985832-67.678402-107.752096-20.321838-170.404018-104.681154-81.235163-109.545952 8.586562-190.889585-83.245959-289.840224 0 0-60.314691-60.668755-149.32084-60.668755-59.826574 0-132.586714 27.41335-208.659297 119.026884C189.059402 498.931357 243.614925 694.738951 407.445224 829.41628c110.360504 90.854241 229.741451 127.721917 328.474127 127.721917 84.060511 0 153.125493-26.759457 188.771341-69.687152C975.006657 826.835502 961.857173 731.11851 919.092183 692.511213zM881.871467
         851.912643c-25.37697 30.591739-81.289398 49.582255-145.95314 49.582255-57.272401 0-171.546028-14.942317-293.154713-115.059526-82.594113-67.921949-134.486994-153.777339-142.256958-235.582483-5.597485-58.957787 11.138688-112.453165 49.773613-158.966525 54.501288-65.61337 110.306268-98.92301 165.841096-98.92301 62.760392 0 108.404965 42.900066 108.567671 42.900066 31.950689 34.477232 31.461549 61.4567 30.645974 106.149599-0.923022 49.256844-2.065032 110.578468 48.686862 178.99058 42.11212 56.728002 78.084403 
         70.230528 117.316939 80.962963 20.974707 5.732561 36.134988 9.863648 60.47842 31.842219C900.999107 751.142565 914.257062 812.924677 881.871467 851.912643z" p-id="1278">
         </path>
         <path d="M122.49538 512.001023c-30.755468 0-55.642275 24.913413-55.642275 55.642275 0 30.726815 24.886807 55.640228 55.642275 55.640228s55.642275-24.913413 55.642275-55.640228C178.137655 536.914436 153.249825 512.001023 122.49538 512.001023z" p-id="1279">
         </path>
         <path d="M122.49538 345.0742c-30.755468 0-55.642275 24.914436-55.642275 55.642275s24.886807 55.642275 55.642275 55.642275 55.642275-24.914436 55.642275-55.642275S153.249825 345.0742 122.49538 345.0742z" p-id="1280">
         </path>
         <path d="M315.504232 246.830665c0-37.927821-30.701233-68.683289-68.683289-68.683289s-68.683289 30.755468-68.683289 68.683289c0 37.926798 30.701233 68.683289 68.683289 68.683289S315.504232 284.757462 315.504232 246.830665zM233.779929 246.830665c0-7.199982 5.868661-13.041014 13.041014-13.041014s13.041014 5.841032 13.041014 13.041014c0 7.198959-5.868661 13.041014-13.041014 13.041014S233.779929 254.029624 233.779929 246.830665z" p-id="1281">
         </path>
         <path d="M428.527378 233.789651c46.078455 0 83.463923-37.357839 83.463923-83.463923 0-46.107107-37.385469-83.463923-83.463923-83.463923s-83.463923 37.356816-83.463923 83.463923C345.064478 196.431811 382.448924 233.789651 428.527378 233.789651zM428.527378 122.505102c15.32401 0 27.821649 12.471033 27.821649 27.821649s-12.497639 27.821649-27.821649 27.821649-27.821649-12.471033-27.821649-27.821649S413.203368 122.505102 428.527378 122.505102z" p-id="1282">
         </path>
    </symbol>
    <symbol id="icons-comment" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
            </defs>
        <path d="M286.313 376.941c-31.017 0-56.165 26.08-56.165 58.263 0 32.184 25.148 58.264 56.165 58.264 31.018 0 56.166-26.08 56.166-58.264 0-32.182-25.148-58.263-56.166-58.263z m224.663 0c-31.017 0-56.165 26.08-56.165 58.263 0 32.184 25.149 58.264 56.165 58.264s56.165-26.08 56.165-58.264c0-32.182-25.148-58.263-56.165-58.263z m224.663 0c-31.017 0-56.166 26.08-56.166 58.263 0 32.184 25.149 58.264 56.166 58.264s56.165-26.08 56.165-58.264c0-32.182-25.149-58.263-56.165-58.263z 
        m112.33-291.304H173.981c-62.035 0-112.33 52.176-112.33 116.527V639.12c0 64.353 51.42 123.67 114.881 123.67h171.184c29.837 31.787 153.332 159.64 153.332 159.64 5.484 5.705 14.37 5.705 19.854 0 0 0 90.419-102.513 149.328-159.64h175.187c63.462 0 114.883-59.318 114.883-123.67V202.164c0-64.351-50.297-116.527-112.333-116.527z m56.167 553.483c0 32.17-26.987 65.93-58.718 65.93h-172.28c-20.87 0-39.63 21.46-39.63 21.46l-120.97 125.467L391.597 726.51s-23.037-21.46-42.782-21.46h-172.28c-31.732 0-58.717-33.76-58.717-65.93V202.164c0-32.183 25.148-58.265 56.165-58.265h673.986c31.018 0 56.168 26.082 56.168 58.265V639.12z" p-id="19871">
        </path>
    </symbol>
    <symbol id="icons-click" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
        </defs>
        <path d="M914.983385 470.488615H613.454769a65.378462 65.378462 0 0 1-46.395077-111.852307c38.754462-38.596923 37.494154-136.743385 27.096616-195.347693-36.627692-68.686769-73.649231-74.043077-84.283077-74.043077-9.846154 3.308308-20.716308 25.993846-25.206154 42.141539-0.787692 199.128615-205.430154 324.450462-214.252308 329.728a65.142154 65.142154 0 0 1-13.154461 6.065231v446.621538H811.323077c14.020923 0 21.110154-7.089231 21.819077-8.979692a59.076923 59.076923 0 0 
        1 1.575384-14.178462l100.273231-413.538461a29.223385 29.223385 0 0 0-20.007384-6.616616z m-827.628308 0H170.141538V913.723077H87.433846V470.488615z m832.984615 438.193231c-1.732923 51.2-49.939692 92.475077-109.016615 92.475077H0V383.133538h230.321231c28.356923-18.747077 170.535385-119.414154 166.990769-258.363076v-2.205539l0.315077-2.205538c0.787692-3.938462 18.432-95.783385 92.317538-116.420923 2.205538-0.551385 9.137231-2.048 19.928616-2.048 30.483692 0 107.677538 12.603077 166.360615 129.890461l1.811692 5.198769c1.496615 6.852923 31.271385 150.449231-21.42523 246.153846h258.363077c60.100923 0 109.016615 42.771692 109.016615 95.31077l-0.630154 5.12-103.030154 425.117538z" p-id="32346"></path>
    </symbol>
    <symbol id="icons-no-message" viewBox="0 0 1024 1024">
        <defs><style type="text/css"></style></defs><path d="M615.689274 536.508374c5.716593 4.986816 14.473928 4.378667 19.460744-1.337926s4.378667-14.473928-1.337926-19.460744l-13.136002-11.433187 13.136002-11.433186c5.716593-4.986816 6.324742-13.74415 1.337926-19.460744-4.986816-5.716593-13.74415-6.324742-19.460744-1.337926l-16.055113 13.987409-16.055114-14.109039c-5.716593-4.986816-14.473928-4.378667-19.460743 1.337926s-4.378667 14.473928 1.337926 19.460744l13.136002 11.433187-13.136002 11.433187c-5.716593 4.986816-6.324742 13.74415-1.337926 19.460743 4.986816 5.716593 13.74415 6.324742 19.460743 1.337926l16.055114-13.987409 16.055113 14.109039zM947.373322 473.382587c-4.986816-5.716593-13.74415-6.324742-19.460743-1.337926l-16.055114 13.987409-16.176743-14.109039c-5.716593-4.986816-14.473928-4.378667-19.460743 1.337926s-4.378667 14.473928 1.337926 19.460744l13.136002 11.433187-13.136002 11.433187c-5.716593 4.986816-6.324742 13.74415-1.337926 19.460743 4.986816 5.716593 13.74415 6.324742 19.460743 1.337926l16.055114-13.987409 16.055113 13.987409c5.716593 4.986816 14.473928 4.378667 19.460744-1.337926s4.378667-14.473928-1.337927-19.460743l-13.136001-11.433187 13.136001-11.433187c5.838223-4.865186 6.446371-13.62252 1.459556-19.339114zM884.004276 667.746763c-12.771113 0-24.812448 4.378667-34.664449 12.041335-0.973037 0.608148-1.946074 1.337926-2.797482 2.310964l-0.12163 0.121629-0.243259 0.24326c-5.594964 6.689631-13.74415 10.581779-22.501485 10.581779-7.419408 0-14.230669-2.675852-19.704003-7.541038-0.12163-0.12163-0.243259-0.12163-0.364889-0.24326-10.581779-12.649483-26.272004-20.190521-43.056895-20.190521-14.109039 0-27.366671 5.230075-37.583561 14.473928-0.364889 0.364889-0.608148 0.729778-0.973037 0.973037-0.729778 0.608148-1.459556 1.216296-2.067704 1.946075-5.594964 6.689631-13.74415 10.581779-22.501485 10.581779-7.419408 0-14.230669-2.675852-19.704003-7.541038-0.12163-0.12163-0.243259-0.12163-0.364889-0.24326-10.581779-12.649483-26.272004-20.190521-43.056895-20.190521-14.109039 0-27.366671 5.230075-37.583561 14.473928-5.473334 4.986816-5.959853 13.379261-0.973037 18.852595 4.986816 5.473334 13.379261 5.959853 18.974225 0.973038 5.351704-4.865186 12.284594-7.541038 19.704003-7.541039 8.757335 0 16.906521 3.892149 22.501485 10.58178 0.608148 0.729778 1.337926 1.337926 2.067704 1.946074 0.243259 0.364889 0.608148 0.729778 0.973037 0.973037 10.21689 9.243853 23.474522 14.473928 37.583561 14.473928 16.784891 0 32.475116-7.541038 43.056895-20.190521 0.12163-0.12163 0.243259-0.12163 0.364889-0.243259 5.351704-4.865186 12.284594-7.541038 19.704003-7.541039 8.757335 0 16.906521 3.892149 22.501484 10.58178 0.608148 0.729778 1.337926 1.337926 2.067704 1.946074 0.364889 0.364889 0.608148 0.729778 0.973038 0.973037 10.21689 9.243853 23.474522 14.473928 37.583561 14.473928 15.811854 0 30.529041-6.689631 41.11082-18.001188 5.351704-4.621927 12.041335-7.297779 19.339114-7.297778 8.757335 0 16.906521 3.892149 22.501485 10.581779 4.743556 5.716593 13.136002 6.446371 18.852595 1.702815 5.716593-4.743556 6.446371-13.136002 1.702815-18.852595-10.825039-12.649483-26.515263-20.190521-43.300154-20.190522z" p-id="34465"></path><path d="M1286.476779 286.07293c-9.122224-1.216296-19.339114-3.892149-19.339114-3.892148-25.785485-6.81126-54.125193-31.502079-67.747714-58.86875-13.62252-27.4883-41.718969-60.328305-41.718969-60.328305-21.285188-20.55541-30.89393-24.569189-50.476303-23.474522-19.704003 1.094667-24.812448 19.460744-24.812448 19.460744l-51.449341 125.278537-19.825633 46.340895c-62.760898-62.03112-148.874688-100.344459-244.110702-100.344459C575.308231 230.244922 419.987172 385.565982 419.987172 577.132676c0 59.355268 14.960447 116.642832 43.056895 167.484024 3.162371 5.716593 10.21689 7.662668 15.933484 4.621927 5.716593-3.162371 7.662668-10.21689 4.621926-15.933484-26.150374-47.435562-40.137784-100.709348-40.137783-156.050837 0-178.673952 144.982539-323.413232 323.656491-323.413232s323.656491 144.73928 323.656491 323.413232c0 47.557192-10.33852 93.654828-29.920893 135.981945-4.621927 9.973631-9.730372 19.704003-15.325335 29.069486-3.284 5.594964-1.459556 12.771113 4.135408 16.055113 5.594964 3.284 12.771113 1.459556 16.055113-4.135408 5.959853-10.095261 11.554816-20.55541 16.420002-31.258819 21.041929-45.246229 32.110227-94.749495 32.110227-145.833947 0-82.70816-28.947856-158.60506-77.356455-218.203587l1.094666 1.094667 32.475116-78.694382c6.689631-11.189928 16.541632-14.230669 16.541632-14.230669 22.258225-5.594964 36.245635 8.757335 36.245635 8.757335 20.55541 13.74415 33.934672 40.745932 77.842974 49.381637 43.908303 8.635705 77.356456-18.122817 86.35705-27.245041 11.189928-11.068298-0.973037-11.919705-0.973037-11.919706z" p-id="34466"></path><path d="M1371.617532 806.404561c-53.638674 0-53.638674-24.325929-107.277349-24.325929s-53.638674 24.325929-107.277349 24.325929-53.638674-24.325929-107.277349-24.325929-53.638674 24.325929-107.277349 24.325929-53.638674-24.325929-107.277348-24.325929-53.638674 24.325929-107.277349 24.325929-53.638674-24.325929-107.277349-24.325929-53.638674 24.325929-107.277349 24.325929c-53.395415 0-53.395415-24.325929-107.03409-24.325929s-53.638674 24.325929-107.277348 24.325929-53.638674-24.325929-107.277349-24.325929c-0.608148 0-2.797482 24.2043-3.40563 24.08267-0.608148-0.12163 4.135408-23.961041 3.527259-24.08267-0.486519-0.12163-9.608742 22.379855-10.09526 22.136595-0.486519-0.243259 10.703409-21.771707 10.21689-22.014966-0.486519-0.243259-15.446965 18.730966-15.933484 18.366077-0.364889-0.364889 16.298373-17.879558 16.055114-18.366077-0.364889-0.364889-20.068892 13.74415-20.433781 13.257632-0.243259-0.486519 20.67704-12.649483 20.433781-13.136002-0.243259-0.486519-23.109633 7.541038-23.352893 6.93289-0.12163-0.486519 23.474522-6.203112 23.352893-6.81126-0.12163-0.486519-24.325929 0.608148-24.32593 0.121629h24.32593-24.32593 24.32593-24.32593 24.32593-24.32593 24.32593-24.32593 24.32593-24.32593 24.32593c0-0.608148-24.2043-2.797482-24.082671-3.40563 0.12163-0.608148 23.961041 4.135408 24.082671 3.52726 0.12163-0.486519-22.379855-9.608742-22.136596-10.095261 0.243259-0.486519 21.771707 10.703409 22.014966 10.216891 0.243259-0.486519-18.730966-15.446965-18.366077-15.933484 0.364889-0.364889 17.879558 16.298373 18.366077 16.055113 0.364889-0.364889-13.74415-20.068892-13.257632-20.433781 0.486519-0.243259 12.649483 20.67704 13.136002 20.433781 0.486519-0.243259-7.541038-23.109633-6.93289-23.352892 0.486519-0.12163 6.203112 23.474522 6.811261 23.352892 0.486519-0.12163-0.608148-24.325929-0.12163-24.325929 53.638674 0 53.638674 24.325929 107.277349 24.325929s53.638674-24.325929 107.277349-24.325929 53.638674 24.325929 107.277349 24.325929 53.638674-24.325929 107.277348-24.325929 53.638674 24.325929 107.277349 24.325929 53.638674-24.325929 107.277349-24.325929 53.638674 24.325929 107.277349 24.325929 53.638674-24.325929 107.277349-24.325929 53.638674 24.325929 107.277349 24.325929 53.638674-24.325929 107.277349-24.325929 53.638674 24.325929 107.277348 24.325929c0.608148 0 2.797482-24.2043 3.405631-24.08267 0.608148 0.12163-4.135408 23.961041-3.52726 24.08267 0.486519 0.12163 9.608742-22.379855 10.09526-22.136596 0.486519 0.243259-10.703409 21.771707-10.21689 22.014967 0.486519 0.243259 15.446965-18.730966 15.933484-18.366077 0.364889 0.364889-16.298373 17.879558-16.055114 18.366077 0.364889 0.364889 20.068892-13.74415 20.433781-13.257632 0.243259 0.486519-20.67704 12.649483-20.433781 13.136002 0.243259 0.486519 23.109633-7.541038 23.352893-6.93289 0.12163 0.486519-23.474522 6.203112-23.352893 6.81126 0.12163 0.486519 24.325929-0.608148 24.32593-0.121629h-24.32593 24.32593-24.32593 24.32593-24.32593 24.32593-24.32593 24.32593-24.32593 24.32593-24.32593c0 0.608148 24.2043 2.797482 24.082671 3.40563-0.12163 0.608148-23.961041-4.135408-24.082671-3.52726-0.12163 0.486519 22.379855 9.608742 22.136596 10.095261-0.243259 0.486519-21.771707-10.703409-22.014966-10.216891-0.243259 0.486519 18.730966 15.446965 18.366077 15.933484-0.364889 0.364889-17.879558-16.298373-18.366077-16.055113-0.364889 0.364889 13.74415 20.068892 13.257632 20.43378-0.486519 0.243259-12.649483-20.67704-13.136002-20.43378-0.486519 0.243259 7.541038 23.109633 6.93289 23.352892-0.486519 0.12163-6.203112-23.474522-6.811261-23.352892-0.729778 0.12163 0.486519 24.325929-0.121629 24.325929z" p-id="34467"></path><path d="M1525.479036 886.680128c-57.774082 0-57.774082-24.325929-115.669795-24.325929-57.774082 0-57.774082 24.325929-115.669795 24.325929-57.774082 0-57.774082-24.325929-115.669794-24.325929-57.774082 0-57.774082 24.325929-115.669795 24.325929-57.774082 0-57.774082-24.325929-115.669794-24.325929-57.774082 0-57.774082 24.325929-115.669795 24.325929-57.774082 0-57.774082-24.325929-115.669794-24.325929-57.774082 0-57.774082 24.325929-115.669795 24.325929-57.774082 0-57.774082-24.325929-115.669794-24.325929-57.774082 0-57.774082 24.325929-115.669795 24.325929-57.774082 0-57.774082-24.325929-115.669794-24.325929-57.774082 0-57.774082 24.325929-115.669795 24.325929s-57.774082-24.325929-115.669794-24.325929c-0.364889 0-2.310963 24.2043-2.675852 24.2043-0.364889 0 3.648889-23.961041 3.284-24.082671-0.364889-0.12163-8.027557 22.988003-8.392446 22.866374-0.364889-0.12163 9.243853-22.379855 9.000594-22.623114-0.364889-0.243259-13.257632 20.312151-13.62252 20.190521-0.364889-0.243259 14.352298-19.582373 14.109039-19.825632-0.243259-0.243259-17.757928 16.663262-18.001188 16.298372-0.243259-0.243259 18.609336-15.568595 18.366077-15.933483-0.243259-0.364889-21.163559 11.919705-21.406818 11.554816-0.12163-0.364889 21.771707-10.703409 21.650077-11.068298-0.12163-0.364889-23.474522 6.568001-23.474522 6.203112-0.12163-0.364889 23.717781-5.108445 23.717781-5.594964 0-0.364889-24.325929 0.729778-24.325929 0.24326h24.325929-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929c0-0.364889-24.2043-2.310963-24.204299-2.675852 0-0.364889 23.961041 3.648889 24.08267 3.284 0.12163-0.364889-22.988003-8.027557-22.866374-8.392446 0.12163-0.364889 22.379855 9.243853 22.623115 9.000594 0.243259-0.364889-20.312151-13.257632-20.190522-13.62252 0.243259-0.364889 19.582373 14.352298 19.825633 14.109039 0.243259-0.243259-16.663262-17.757928-16.298373-18.001188 0.243259-0.243259 15.568595 18.609336 15.933484 18.366077 0.364889-0.243259-11.919705-21.163559-11.554817-21.406818 0.364889-0.12163 10.703409 21.771707 11.068298 21.650077 0.364889-0.12163-6.568001-23.474522-6.203112-23.474522 0.364889-0.12163 5.108445 23.717781 5.594964 23.717781 0.364889 0-0.729778-24.325929-0.243259-24.325929 57.774082 0 57.774082 24.325929 115.669794 24.325929 57.774082 0 57.774082-24.325929 115.669795-24.325929 57.774082 0 57.774082 24.325929 115.669794 24.325929 57.774082 0 57.774082-24.325929 115.669795-24.325929 57.774082 0 57.774082 24.325929 115.669794 24.325929 57.774082 0 57.774082-24.325929 115.669795-24.325929 57.774082 0 57.774082 24.325929 115.669794 24.325929 57.774082 0 57.774082-24.325929 115.669795-24.325929 57.774082 0 57.774082 24.325929 115.669794 24.325929 57.774082 0 57.774082-24.325929 115.669795-24.325929 57.774082 0 57.774082 24.325929 115.669794 24.325929 57.774082 0 57.774082-24.325929 115.669795-24.325929s57.774082 24.325929 115.669794 24.325929c0.364889 0 2.310963-24.2043 2.675852-24.204299 0.364889 0-3.648889 23.961041-3.284 24.08267 0.364889 0.12163 8.027557-22.988003 8.392446-22.866374 0.364889 0.12163-9.243853 22.379855-9.000594 22.623114 0.364889 0.243259 13.257632-20.312151 13.62252-20.190521 0.364889 0.243259-14.352298 19.582373-14.109039 19.825632 0.243259 0.243259 17.757928-16.663262 18.001188-16.298372 0.243259 0.243259-18.609336 15.568595-18.366077 15.933484 0.243259 0.364889 21.163559-11.919705 21.406818-11.554817 0.12163 0.364889-21.771707 10.703409-21.650077 11.068298 0.12163 0.364889 23.474522-6.568001 23.474522-6.203112 0.12163 0.364889-23.717781 5.108445-23.717781 5.594964 0 0.364889 24.325929-0.729778 24.325929-0.24326h-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929-24.325929 24.325929-24.325929c0 0.364889 24.2043 2.310963 24.204299 2.675853 0 0.364889-23.961041-3.648889-24.08267-3.284001-0.12163 0.364889 22.988003 8.027557 22.866374 8.392446-0.12163 0.364889-22.379855-9.243853-22.623114-9.000594-0.243259 0.364889 20.312151 13.257632 20.190521 13.62252-0.243259 0.364889-19.582373-14.352298-19.825633-14.109039-0.243259 0.243259 16.663262 17.757928 16.298373 18.001188-0.243259 0.243259-15.568595-18.609336-15.933484-18.366077-0.364889 0.243259 11.919705 21.163559 11.554817 21.406818-0.364889 0.12163-10.703409-21.771707-11.068298-21.650077-0.364889 0.12163 6.568001 23.474522 6.203112 23.474522-0.364889 0.12163-5.108445-23.717781-5.594964-23.717781-0.486519 0.12163 0.608148 24.325929 0.24326 24.325929z" p-id="34468"></path>
    </symbol>
    <symbol id="refresh" viewBox="0 0 1024 1024">
        <defs>
            <style type="text/css"></style>
        </defs>
        <path d="M827.5 830.3c-176.1 173.8-459.6 171.8-633.3-4.4-173.7-176.2-171.7-460 4.4-633.7 176.1-173.8 459.6-171.8 633.3 4.4 173.6 176.1 171.7 459.9-4.4 633.7zM513.1 276c-36.4 0-70.7 8.5-101.4 23.3l15.2-36.1-43.5-18.3-54.8 130.4 5.5 2.3-1.2 3.9 37.3 11.3 1.9 0.8 0.1-0.2 16.2 4.9v4.8c1.1-1.3 2.4-2.5 3.6-3.7l76.3 23.2 13.7-45.1-43.6-13.2c22.4-11.4 47.6-18.1 74.5-18.1 91.2 0 165.1 74 165.1 165.2 0 91.2-73.9 165.2-165.1 165.2-83.1 0-151.6-61.5-163.2-141.4h-70.6C291 654 391.2 746.8 513.1 746.8c129.9 0 235.2-105.4 235.2-235.4C748.3 381.3 643 276 513.1 276z" p-id="8606"></path>
    </symbol>
</svg>`
	);
};
